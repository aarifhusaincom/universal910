//Hierarchical inheritance

class A
{
 aData()
 {
  console.log("Class A , aData method invoked");    
 } 
}

class B extends A
{
 bData()
 {
  console.log("Class B , bData method invoked");    
 } 
}

class C extends A
{
 cData()
 {
  console.log("Class C , cData method invoked");    
 } 
}

var obj = new B();
obj.aData();
obj.bData();

var obj1 = new C();
obj1.aData();
obj1.cData();
