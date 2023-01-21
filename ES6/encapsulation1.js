//Encapsulation : bug

class Employee
{
 setEmployee(eno,enm)
 {
  this.eno=eno;
  this.enm=enm;
 }
 getEmployee()
 {
  console.log("Eno = "+this.eno);
  console.log("Enm = "+this.enm); 
 }    
}

var obj = new Employee();
obj.setEmployee(1001,"John");
console.log("Before changes");
obj.getEmployee();

//console.log("outside class eno = "+obj.eno);
obj.eno=0;

console.log("After changes");
obj.getEmployee();