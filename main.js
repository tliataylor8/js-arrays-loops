
// ARRAYS

// Unfortunately strings and numbers are not enogh for most programming purposes
// What is needed are collections of data that can be used differently
// 
// Arrays are great for:
// -storing data
// - enumerating (organizing) data by using an index to find them
// -quickly reordering data

// let friends = ['Moe', 'Curly', 'Larly'];
// positions: 0, 1, 2. Moe is 0 and Curly is 2

// console.log(friends[0])
// => Moe

// let firstFriend = friends [0];
// let lastFriend = friends[2];
// console.log(firstFriend | lastFriend)
// console.log(firstFriend)
// console.log(lastFriend)

// let nums = [22,48,4,80];

// let shoeBrands = [];
// shoeBrands[0] = 'Brooks';
// shoeBrands[1] = 'Hoka';
// shoeBrands[2] = 'NB';
// shoeBrands[10] = 'Adidas';
// console.log(shoeBrands)

// console.log(shoeBrands.length);

// // Create an array of clothing brand
// let cBrands = ['Levis', 'Adidas', 'Kirkland', 'Supreme']
// console.log(cBrands)
// // array car brands using bracket notation
// let carBrands = [];
// carBrands[0] = 'Honda'
// carBrands[1]= 'Suburu'
// carBrands[2]= 'Chevy'
// console.log(carBrands)

// JS Loops
// for loop is the most common way
// interations: let i=0 is the starting point of the loop
// i<10 is the condition of which the loop functions
// i++ incrementor
// for (let i = 0; i<=10; i++){
//     console.log(i);
// }

// return all even #s from 0 - 100
// for (let i=0; i<=100; i+=2){
//     console.log(i)
// }

// for (let i=0; i<=100; i++) {
//     if(i % 2==0)
//         console.log(i)
// }

// While loops
// let i = 0;
// while(i<10){
//     console.log(i);

//     i++;
// }

// let milkShakeSpots = ['Five guys', 'Shake Shack', 'White Castle', 'Cook Out', 'Haagen Daz', 'Cold Stone', 'Van Leewins', 'SmashBurger', 'Checkers', 'Black Tap', 'Mr Softie']

// for (let i = 0; i< milkShakeSpots.length; i++){
//     // console.log(milkShakeSpots[i]);
//     let spot = milkShakeSpots[i];
//     console.log(`I like this spot: ${spot} alot`);

// }

// For...Of Loops are good for use on OBJECTS
// const str = "Hello World";

// for (const c of str) {
//     console.log(c);
// }

// const cars = ['Audi', 'Honda', 'Ford', 'Acura'];

// for(const c of cars){
//     console.log(c);
// }

// const str = "Hello World";

// for (const i in str) {
//     console.log(typeof i);
// }

// DO WHILE LOOP

let x=10;

do {
    x--;
    console.log(x);
} while (x > 50);