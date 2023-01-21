//oops : setter & getter methods
//setter : used to set value to class params
//getter : used to get value of class params

class Add
{
 setAdd(a,b)
 {
  this.a=a;    
  this.b=b;
 }
 addData()
 {
  this.c=this.a+this.b;    
 }    
 getAdd()
 {
  //return {'a':this.a,'b':this.b,'c':this.c};    
  return this;
 }
}

var obj = new Add();
obj.setAdd(10,20);
obj.addData();
var res=obj.getAdd();
//console.log(res.a);
console.log("a = "+res['a']);
console.log("b = "+res['b']);
console.log("add = "+res['c']);
