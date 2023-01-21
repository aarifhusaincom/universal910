//promise

console.log("Before code execution");

function demo()
{
 return new Promise((resolve)=>{
  setTimeout(()=>{
   resolve("Its working!!!!");
  },2000);
 });
}

demo().then((result)=>{
 console.log(result);
});

console.log("After code execution");
