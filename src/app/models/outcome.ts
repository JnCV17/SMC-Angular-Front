export class Outcome {


	ID_ST_OUTCOME:string;
	CRITERION:string;
	SHORT_DESCRIPTION:string;
	PROGRAM_ID_PROGRAM:string;
	USER_CIP_ID_USER:string;


	constructor(ID_ST_OUTCOME:string, CRITERION:string,SHORT_DESCRIPTION:string,PROGRAM_ID_PROGRAM:string,USER_CIP_ID_USER:string) {
		this.ID_ST_OUTCOME=ID_ST_OUTCOME;
		this.CRITERION=CRITERION;
		this.SHORT_DESCRIPTION=SHORT_DESCRIPTION;
		this.PROGRAM_ID_PROGRAM=PROGRAM_ID_PROGRAM;
		this.USER_CIP_ID_USER=USER_CIP_ID_USER;
	}



}