import { Injectable } from '@angular/core';
import { Program } from '../models/program';
import { ParameterSmc } from '../models/parameterSmc';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProgramsService {


	constructor(private http:Http) { 	
	}



	getPrograms():Observable<Program[]>{
		return this.http.get('https://smc-icesi.herokuapp.com/api/v1/programs').map((response:Response)=> response.json());
	}


	getSubCycleActive(program):Observable<ParameterSmc>{
		return this.http.get('https://smc-icesi.herokuapp.com/api/parameterCycle/'+program).map((response:Response)=> response.json());
	}

		savePlan(idUserp,idOutcomeCycleAsp):Observable<any>{
		let myvar; 	
		console.log("dentro service: "+idUserp);
		console.log("dentro service: "+idOutcomeCycleAsp);
		console.log('https://smc-icesi.herokuapp.com/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp);
		 
		myvar = this.http.get('https://smc-icesi.herokuapp.com/api/savePlan/2813/74').map((response:Response)=> response.json());
		console.dir(myvar);
		return myvar; 
		//return 'https://smc-icesi.herokuapp.com/api/savePlan/'+idUserp+'/'+idOutcomeCycleAsp;
	}
}


