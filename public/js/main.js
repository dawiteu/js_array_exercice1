let codings = [ 'coding 15', 'coding 16', 'coding 17']; 


codings.forEach(function(cont){ console.log(cont) } );

console.log(`-----`);



for(i=0; i<codings.length;i++){
    console.log(codings[i]);
}
console.log(`-----`);



let arr2 = codings.reverse(); 
let max = arr2.length-1; 
while( max >= 0){
    console.log(codings[max]);
    max--; 
}
console.log(`-----`);



console.log(codings.length);

console.log(`-----`);


console.log(codings[0]);
console.log(codings[1]);
console.log(codings[2]);