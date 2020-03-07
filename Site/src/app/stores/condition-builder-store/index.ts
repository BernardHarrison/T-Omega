
export interface conditionTest {
	subject: string; //The x-path to the data field
	op: string;      //The x-path to the operator
	val: any;        //The value to comapre
}

export enum conditionTestGroupTypes {
	and,
	or
}

export class conditionTestGroup {
	"op": conditionTestGroupTypes;
	"tests": conditionTest[];
	"groups": conditionTestGroup[];
}


export interface ConditionDefinition {
	id: number;
	name: string;
	condition: conditionTestGroup;
}