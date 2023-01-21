//constructor : constructor overloading (error)
//In ES6 a class may contain only single constructor

class Employee
{
 constructor()
 {
  this.eno=0;
  this.enm=null;
 }
 constructor(eno,enm)
 {
  this.eno=eno;
  this.enm=enm;
 }
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

var obj = new Employee(1,'test');
obj.getEmployee();
obj.setEmployee(1001,"John");
obj.getEmployee();



