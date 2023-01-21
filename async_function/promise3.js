//promise

console.log("Before code execution");

function demo()
{
 return new Promise((resolve)=>{
  setTimeout(()=>{
   resolve("Its working!!!!");
  });
 });
}

console.log(demo());

console.log("After code execution");
