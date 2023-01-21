//callback : sync

console.log("Before code execution");

function check(n,cb)
{
 var s=0;
 if(n%2==0)
  s=1; 
 setTimeout(()=>{
  cb(s);
 },2000);
}

var n=11;
check(n,(result)=>{
 if(result)
  console.log("Number is even");
 else
  console.log("Number is odd"); 
});

console.log("After code execution");

