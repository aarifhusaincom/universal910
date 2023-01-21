//spread operator -> (...)

var empDetails={"eno":1001,"enm":"jarvis","esal":10000.43};

console.log("Before changes Employee Details :")
console.log(empDetails);

var d={"edes":"trainer","edob":1992,"city":"Indore"};
empDetails={...empDetails,...d};

console.log("After changes Employee Details :")
console.log(empDetails);