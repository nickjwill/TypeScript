// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 25;
var taxRate : number = 7.5;

// String
var fullName : string = "Nick Williams"

// Array
var ages : number[] = [25, 33, 11];

// Tuple
let player : [number, string, number, number];
player = [3, 'Coreera', .333, 33];

// Enum
enum ApprovalStatus {Approve, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any 
var apiData : any[] = [123, 'Nick', false];

// Void
function printOut(msg: string) : void {
	console.log(msg);
}