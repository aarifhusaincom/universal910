//callback : sync

console.log("Before code execution");

function check(n,cb)
{
 var s=0;
 if(n%2==0)
  s=1; 
 cb(s);
}

var n=11;
check(n,(result)=>{
 if(result)
  console.log("Number is even");
 else
  console.log("Number is odd"); 
});

console.log("After code execution");

