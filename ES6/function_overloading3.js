//Function overloading : Problem solution
//Rest operator (...)

function Calculate(choice,...args)
{
 var res;   
 if(choice=="add")
 {
  res=args[0]+args[1];
  console.log("Add = "+res);
 }
 else if(choice=="sub")
 {  
  res=args[0]-args[1];
  console.log("Sub = "+res);  
 } 
 else
  console.log("Invalid Choice"); 
}

Calculate("add",10,5);
Calculate("sub",15,7);