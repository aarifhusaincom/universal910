//promise

console.log("Before code execution");

function demo()
{
 return new Promise((resolve)=>{
  resolve("Its working!!!!");	
 });
}

demo().then((result)=>{
 console.log(result);
});

console.log("After code execution");
