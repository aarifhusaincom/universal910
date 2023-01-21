//Inheritance : Overriding problem solution
//super is keyword used to refer parent class instance

class A
{
 Data()
 {
  console.log("Class A , Data method invoked");    
 }   
 aData()
 {
  console.log("Class A , aData method invoked");    
 } 
}

class B extends A
{
 Data()
 {
  super.Data();   
  console.log("Class B , Data method invoked");    
 }   
 bData()
 {
  console.log("Class B , bData method invoked");    
 } 
}

var obj = new B();
obj.aData();
obj.bData();

//class B , Data method will be executed
obj.Data();