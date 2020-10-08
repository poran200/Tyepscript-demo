const  names: string[]=["poran","jalal"];

const nameLength  = names.filter(name => name.length > 4).join(",");

console.log(nameLength);
