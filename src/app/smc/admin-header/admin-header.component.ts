import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Outcome } from '../../models/outcome';
import { Observable } from 'rxjs/Rx';
import { OutcomeService } from '../../services/outcome.service';
import { Rol } from '../../models/rol';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  outcomes:Observable<Outcome[]>;
  cantidad: Outcome[];

  outcomesTel:Observable<Outcome[]>;
  cantidadTel: Outcome[];

	nameUser : string;
	foto : string = "https://qualiscare.com/wp-content/uploads/2017/08/default-user.png";

  roles1:Observable<Rol[]>;
  roles2:Rol[];
    idrol:string;

    rolsString:string;

	constructor(private authService: AuthService, private router: Router,private outcomeService:OutcomeService,private userService:UserService) { }

	ngOnInit() {
		this.nameUser = localStorage.getItem('name').slice(1, -1);
	  	this.nameUser = this.nameUser + " " + localStorage.getItem('last_name').slice(1, -1);

	var idUser = localStorage.getItem('ID_USER');

    console.log(idUser);

  	if(idUser === "2813"){
  		this.foto = "https://www.icesi.edu.co/solicitud_servicios/images/img_user.php?cedula=10546071";
  	}

  	if(idUser === "5000"){
  		this.foto = "https://conf.researchr.org/getProfileImage/norhavillegas/6b2f298e-31de-44b1-bce8-74e0ada75502/small.jpg?1507858768000";
  	}


this.outcomes= this.outcomeService.outcomesByUserAndProgram(idUser,"SIS");

        this.outcomes.subscribe(rols=>{
      this.cantidad=rols;
      console.log("tamaño "+ this.cantidad.length);
    });

this.outcomesTel= this.outcomeService.outcomesByUserAndProgram(idUser,"TEL");

        this.outcomesTel.subscribe(rols=>{
      this.cantidadTel=rols;
      console.log("tamaño tel"+ this.cantidadTel.length);
    });

this.roles1=this.userService.getRolsByUser(idUser);
    this.roles1.subscribe(rols=>{
      this.roles2=rols;

 console.log('forrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    for (var i = this.roles2.length - 1; i >= 0; i--) {
      this.idrol=this.roles2[i].ROLE_CIP_ID_ROLE;
      console.log(this.idrol);

    
        if (this.idrol=='1') {
          this.rolsString="Outcome Leader";

        console.log('Outcome Leaderrrrrrrrrrrrrrrrr');
        }
        
        if (this.idrol=='2') {

         this.rolsString="Program Director";
          console.log('Program Director');
        }
      
    
    }



      
    });





	  }

	logout(){
		console.log("puto el que lo lea");
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/auth/signin']);
 	}

}
