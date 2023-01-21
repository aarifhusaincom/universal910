/*Inheritance : Constructor overriding problem 
solution*/

class A
{
 constructor()
 {
  console.log("Class A , Constructor method invoked");    
 }   
 aData()
 {
  console.log("Class A , aData method invoked");    
 } 
}

class B extends A
{
 constructor()
 {
  super();   
  console.log("Class B , Constructor method invoked");    
 }   
 bData()
 {
  console.log("Class B , bData method invoked");    
 } 
}

var obj = new B();
obj.aData();
obj.bData();
