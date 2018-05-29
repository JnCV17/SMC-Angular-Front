import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {

	nameUser : string;
	foto : string;
  idUser : any;

  constructor() {
    this.idUser = localStorage.getItem('ID_USER')
  }

  ngOnInit() {
  	this.nameUser = localStorage.getItem('name').slice(1, -1);
    if(this.idUser == "2813"){
      this.foto = "https://www.icesi.edu.co/solicitud_servicios/images/img_user.php?cedula=10546071";
    }else{
      if(this.idUser == "5000"){
      this.foto = "https://conf.researchr.org/getProfileImage/norhavillegas/6b2f298e-31de-44b1-bce8-74e0ada75502/small.jpg?1507858768000";
       }else{
        this.foto= "https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-256.png"
       }
    }
  }

}
