//promise

console.log("Before code execution");

function check(n)
{
 return new Promise((resolve,reject)=>{
  if(n%2==0)
   resolve(1);	
  else
   reject(0);
 });
}

var n=11;
check(n).then((result)=>{
 console.log("Number is even");
}).catch((result)=>{
 console.log("Number is odd");
});

console.log("After code execution");
