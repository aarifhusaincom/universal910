class MyModule
{
 a=100;
 b=200;
 c=300;

 demo()
 {
  console.log("Module m2 , demo method invoked");    
 }

 demo1()
 {
  console.log("Module m2 , demo1 method invoked");    
 }

}

export default new MyModule();
