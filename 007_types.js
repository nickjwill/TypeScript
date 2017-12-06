// Boolean
var paidAccount = false;
// Number
var age = 25;
var taxRate = 7.5;
// String
var fullName = "Nick Williams";
// Array
var ages = [25, 33, 11];
// Tuple
var player;
player = [3, 'Coreera', .333, 33];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approve"] = 0] = "Approve";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any 
var apiData = [123, 'Nick', false];
// Void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=007_types.js.map