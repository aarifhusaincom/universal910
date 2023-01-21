import { MyModule } from './m2.js'; 
var obj = new MyModule();

console.log("Module imported successfully....");

console.log("a = "+obj.a);
console.log("b = "+obj.b);
console.log("c = "+obj.c);

obj.demo();
obj.demo1();