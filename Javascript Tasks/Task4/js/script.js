
var pan = [28, 30, 27]

//console.log(pan[1]);

pan.push(25)



//pan = [1]
//console.log(pan[0]);
pan[0] = 10
//console.log(pan)


/*console.log("Driheli");
console.log("Driheli");
console.log("Driheli");
console.log("Driheli");
console.log("Driheli");
*/


//for(begin; while; do it at end of loop)
//i++ add 1 (i)
for(i=0; i<4; i++) {
  //odd
  if (i % 2 == 1) {
    console.log("I have been change");
  }
//pair
  else {
    console.log(pan[i]);
  }
}