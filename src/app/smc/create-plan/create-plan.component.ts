import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ProgramsService } from '../../services/programs.service';
import { OutcomeService } from '../../services/outcome.service';
import { UserService } from '../../services/user.service';
import { PlanAssessmentService } from '../../services/plan-assessment.service';
import { Program } from '../../models/program';
import { Outcome } from '../../models/outcome';
import { OutcomeCycleAs } from '../../models/outcomeCycleAs';
import { ParameterSmc } from '../../models/parameterSmc';
import { Rol } from '../../models/rol';
import { Observable } from 'rxjs/Rx';
import { User } from '../../models/user';
import { Router } from "@angular/router";

@Component({
	selector: 'app-create-plan',
	templateUrl: './create-plan.component.html',
	styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {


	programs:Observable<Program[]>;
	outcomes:Observable<Outcome[]>;
	cantidad: Outcome[];
	roles1:Observable<Rol[]>;
	roles2:Rol[];


	subCycle:Observable<ParameterSmc>
	subCycle2:ParameterSmc;

	OutcomeCycleAs:Observable<OutcomeCycleAs>
	OutcomeCycleAs2:OutcomeCycleAs;


	programSelected:any;
	outcomeSelected:any;
	user1:Observable<User>
	user:User;

	id_user :any;


	plan:Observable<any>; 
	plan2:any;

	outcomecambiado:Observable<Outcome>;
	outcomecambiado2:any;
	idrol:string;

	constructor(private userService:UserService,private programsService:ProgramsService,
		private outcomeService:OutcomeService,
		private planAssessmentService:PlanAssessmentService, 
		private router: Router) {
		
	}

	ngOnInit(): void {

		this.isLoggedIn();
	
  		var idUser = localStorage.getItem('ID_USER');

  		this.id_user = idUser;

		this.programs= this.programsService.getPrograms();

		console.log(idUser);

		this.roles1=this.userService.getRolsByUser(idUser);
		this.roles1.subscribe(rols=>{
			this.roles2=rols;
		});

	//	for (var i = this.roles2.length - 1; i >= 0; i--) {
	//		this.idrol=this.roles2[i].ROLE_CIP_ID_ROLE;
	//	}

	}

	onChangeProgram(newValue) {
		this.programSelected = newValue;
		this.subCycle =this.programsService.getSubCycleActive(newValue);
	
		for (var i = this.roles2.length - 1; i >= 0; i--) {
			this.idrol=this.roles2[i].ROLE_CIP_ID_ROLE;
			console.log(this.idrol);

		
				if (this.idrol=='1') {
				this.outcomes= this.outcomeService.outcomesByUserAndProgram(this.id_user,newValue);

				this.outcomes.subscribe(rols=>{
			this.cantidad=rols;
			console.log("tamaño "+ this.cantidad.length);
		});

				console.log('Outcome Leaderrrrr');
				}
				
				if (this.idrol=='2') {

					this.outcomes= this.outcomeService.outcomeByProgram(newValue);
					console.log('Program Director');
				}
			
		
		}
	
		
		this.subCycle.subscribe(cycle=>{
			this.subCycle2=cycle;

		});

	}

	onChangeOutcome(newValue) {
		
		console.log(this.outcomeSelected);
		this.outcomeSelected = newValue; 

		this.OutcomeCycleAs=this.outcomeService.outcomeCycleAsByOutcomeCycle(this.outcomeSelected,this.subCycle2.TEXT_VALUE);
		this.OutcomeCycleAs.subscribe(outcyas=>{
			this.OutcomeCycleAs2=outcyas;
			console.log(this.OutcomeCycleAs2.ID_OUTCO_CYCLE+"algo");

		});
	}

	crearPlan(){
	console.log("subcycle dentro : "+ this.subCycle2.TEXT_VALUE);
		console.log("outcome1 : " + this.outcomeSelected);
		console.log("outcomeCycleAs : " + this.OutcomeCycleAs2.ID_OUTCO_CYCLE);
		console.log("fecha : " + "fecha");
		console.log("usuario : " + this.user.ID_USER);
		console.log("perido : " + "algo");
		console.log("estado : " + "draft");
		console.log("outcome cycle : " + "buscar id");

		
		this.plan = this.planAssessmentService.savePlan(this.user.ID_USER,this.OutcomeCycleAs2.ID_OUTCO_CYCLE);
		this.plan.subscribe(prueba=>{
			this.plan2 = prueba;
		});

		this.outcomecambiado=this.outcomeService.changeStateOutcomeToCreated(this.outcomeSelected);
		this.outcomecambiado.subscribe(prueba=>{
			this.outcomecambiado2 = prueba;
		});
 window.location.reload();
    // this.router.navigate(['/smc/create/']);

	}

	    isLoggedIn(){
    if(localStorage.getItem("user") == null){
      this.router.navigate(['/auth/signin']);
    }
  }



}


