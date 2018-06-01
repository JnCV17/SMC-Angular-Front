import { Component, OnInit ,Input} from '@angular/core';
import { Pi } from '../../models/pi';
import { CoursesMapping } from '../../models/coursesMappping';
import { AssessmentCourse } from '../../models/assessmentCourse';
import { CDIOyPI } from '../../models/cdiobypi';
import { PlanAssessmentService } from '../../services/plan-assessment.service';
import { Observable } from 'rxjs/Rx';
import { PlanAssessment } from '../../models/planAssessment';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";


@Component({
	selector: 'app-plan-info',
	templateUrl: './plan-info.component.html',
	styleUrls: ['./plan-info.component.css']
})
export class PlanInfoComponent implements OnInit {
	@Input() idPlan: number;
	outcome:string;
	outcomeid:string;
	leader:string;
	description:string;
	evaluation:string;

	newChecked: boolean;

	picode: string;
	pidescription: string;

	planObservable:Observable<PlanAssessment>;
	plan:PlanAssessment;


	pis: Pi[];

	columns: string[];


	constructor(private planAssessmentService:PlanAssessmentService,private router: Router) { 

		this.picode="";
		this.pidescription="";
	}

	ngOnInit() {

		this.newChecked = false;

		let piObservable = this.planAssessmentService.getPiByPlanId(this.idPlan);

		piObservable.subscribe((data)=> {
			this.pis = data;

	
		console.log(this.pis );
		});


		this.planObservable= this.planAssessmentService.getPlanById(this.idPlan);

		this.planObservable.subscribe((data)=> {
			this.plan = data;

	
	console.log(this.plan);
		this.outcome=this.plan.Criterion;
		this.outcomeid=this.plan.Idplan;
		this.leader=this.plan.Leader;
		this.description=this.plan.Description;
		this.evaluation=this.plan.DateEvaluation;
		});
	

		}


		editRow(pi:Pi){

    		//	window.open('/smc/edit/'+this.idPlan+'/'+pi.Idpi); 
 			this.router.navigate(['/smc/edit/'+this.idPlan+'/'+pi.Idpi]);
		}

		cancelAdd(){
    		this.newChecked = false;

    		this.picode = "";
    		this.pidescription = "";
  		}

  		createNewPi(){
  		this.newChecked = false;

  		if(this.picode == null || this.picode.trim().length === 0){
    		alert("Please set a code for the PI");
    	}else{
    		if(this.pidescription == null || this.pidescription.trim().length === 0){
    			alert("Please set a description for the PI");
    		}else{
    			this.planAssessmentService.createPiPlan(this.picode, this.pidescription,this.idPlan);
    		}
    	}
    	this.picode = "";
    	this.pidescription = "";
    	window.location.reload();
  		}

  		showAdd(){
	    if(this.newChecked != true){
	      this.newChecked = true;
	    }else{
	      this.newChecked = false;
	    }
    
  }

		
	}






