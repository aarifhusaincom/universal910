//spread operator -> (...)

var empDetails={"eno":1001,"enm":"jarvis","esal":10000.43};

console.log("Before changes Employee Details :")
console.log(empDetails);

//to add details

//type2
empDetails={...empDetails,"edes":"admin","edob":1992};

//type1
//empDetails["edes"]="admin";
//empDetails["dob"]="1992";

console.log("After changes Employee Details :")
console.log(empDetails);