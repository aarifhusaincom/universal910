/* Function overloading : It is a kind of polymorphism , which signify a function with same name & different different implementation */
//Cannot implement multiple function with same name
//Error

function add(a,b)
{
 var res=a+b;   
 console.log("Add = "+res);    
}

function add(a,b,c)
{
 var res=a+b+c;   
 console.log("Add = "+res);    
}

add(10,20);
add(10,20,30);