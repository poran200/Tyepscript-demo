//type annotations type inference
// variable
const apple: number = 4;

 const  froute: string = "apple";
 // array
const colors: string[] =["red","green"];
const numbers: number[] =[1,2];
// builtin object
const  now: Date = new Date();
//function
const logNumber:(i: number)=> void = (i:number)=>{
  console.log(i);
}
//object literal
const point:{x:number,y:number}={
 x: 10,
 y: 12
}
//annotation
const jason = '{"x": 10,"y":12}';
const coordinates: {x:number,y:number} = JSON.parse(jason);

console.log(coordinates);
