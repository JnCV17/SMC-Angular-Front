import { Injectable } from '@angular/core';
import { Program } from '../models/program';
import { ParameterSmc } from '../models/parameterSmc';
import { User } from '../models/user';
import { UserRols } from '../models/userRols';
import { Rol } from '../models/rol';
import { RolCip } from '../models/rolCip';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

 constructor(private http:Http) { 	
	}

	getUser(idUser):Observable<User>{
		console.log("algoooooooooooooooooooo");
		console.log('https://smc-icesi.herokuapp.com/api/userById/'+idUser);
		return this.http.get('https://smc-icesi.herokuapp.com/api/userById/'+idUser).map((response:Response)=> response.json());
	}

	getRolsByUser(idUser):Observable<Rol[]>{
		return this.http.get('https://smc-icesi.herokuapp.com/api/rolsByUserId/'+idUser).map((response:Response)=> response.json());
	}

	getRol(idRol):Observable<RolCip>{
		return this.http.get('https://smc-icesi.herokuapp.com/api/getRol/'+idRol).map((response:Response)=> response.json());
	}

	getAllUsers():Observable<UserRols[]>{

		return this.http.get('https://smc-icesi.herokuapp.com/api/getAllUserCip').map((response:Response)=> response.json());
	}

	getAllProfessors():Observable<UserRols[]>{

		return this.http.get('https://smc-icesi.herokuapp.com/api/getAllProfessors').map((response:Response)=> response.json());
	}
}
