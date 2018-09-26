// console.log("WHILE LOOPS");
//
// var x = -10;
// console.log("Print all numbers between -10 and 19");
// while(x < 20) {
//   console.log(x);
//   x++;
// }
//
// var y = 10;
// console.log("Print all even numbers between 10 and 40");
// while(y <=40) {
//   console.log(y);
//   y+=2;
// }
//
// var z = 301;
// console.log("Print all odd numbers between 300 and 333");
// while(z <=333) {
//   console.log(z);
//   z+=2;
// }
//
// var a = 5;
// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// while (a <= 50) {
//   if((a % 5 === 0) && (a % 3 === 0)) {
//     console.log(a);
//   }
//   a++;
// }

console.log("FOR LOOPS");


console.log("Print all numbers between -10 and 19");
for(var x = -10; x < 20; x++) {
  console.log(x);
}


console.log("Print all even numbers between 10 and 40");
for(var y = 10; y <=40; y+=2) {
  console.log(y);
}


console.log("Print all odd numbers between 300 and 333");
for(var z = 301; z <=333; z+=2) {
  console.log(z);
}


console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for (var a = 5; a <= 50; a++) {
  if((a % 5 === 0) && (a % 3 === 0)) {
    console.log(a);
  }
}
