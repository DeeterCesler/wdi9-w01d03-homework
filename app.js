// easy going

for(let i=1; i<=20; i++){
    console.log(i)
}

// get even

for(let i=0; i<=200; i+=2){
    console.log(i)
}

// excited kitten

for(let i=0; i<20; i++){
    console.log("Love me, pet me! HSSSSSS!")
    if (i % 2 ===0){
        let testNumber = Math.random();
        if(testNumber < 0.33){
            console.log("...human...why you taking pictures of me?...")
        }
        if(testNumber >= 0.33 && testNumber < 0.66){
            console.log("...the catnip made me do it...")
        }
        if(testNumber >= 0.66){
            console.log("...why does the red dot always get away...")
        }
    }
}

// fizz buzz

for(let i=1; i<=100; i++){
    if(i % 15 === 0){
        console.log("FizzBuzz")
    }
    if(i % 3 === 0){
        console.log("Fizz")
    }
    if(i % 5 === 0){
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

// getting to know you

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad.shift();
shahzad.unshift("Gameboy");

daniel[1]+=1;

ryan.pop();
ryan.push("Gotham City");

reuben.pop();
reuben.push("Chicago");

jim.pop();
jim.push("New York", "London", "Beijing");

jim.splice(2, 1);

// yell at the ninja turtles

const turtles = ["Donatello", "Leonardo", "Raphael", "Michelangelo"];


for(let i=0; i<turtles.length; i++){
    let name = turtles[i];
    console.log(name.toUpperCase());
}

// the alternator part is taking too much time to complete right now
// for(let i=0; i<turtles.length; i++){
//     let name = turtles[i];
//     for(let j=0; j<name.length; j+=2){
//         name[j].toUpperCase();
//     }
//     console.log(name);
// }

// return of the closets
// alien attire

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  const kristynsShoe = kristynsCloset.shift();
  const thomsAccessories = thomsCloset[2];

  thomsAccessories.push(kristynsShoe);

//   dress 'em up

const firstOutfit = (`Kristyn is wearing a ${kristynsCloset[0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][2]}.`);
const secondOutfit = (`Tom is wearing a ${kristynsCloset[3]}, ${thomsCloset[0][3]}, and ${thomsCloset[2][1]}.`);;
const thirdOutfit = (`The inconspicuous outfit is a ${kristynsCloset[2]}, ${thomsCloset[0][0]}, and ${thomsCloset[1][0]}.`);

console.log(firstOutfit);
console.log(secondOutfit);
console.log(thirdOutfit);

// dirty laundry

for(let w = 0; w<kristynsCloset.length; w++){
    console.log(`WHIRR: Now washing ${kristynsCloset[w]}`)
}

for(let x = 0; x<thomsCloset.length; x++){
    console.log(thomsCloset[x])
}
// not sure if I understood this question correctly?

// mutiples of 3 and 5

// find all the multiples of 3 and 5 and put them in an array
let arrayToSum = [];

for(n = 0; n<1000; n++){
    if(n % 3 === 0 || n % 5 === 0){
        arrayToSum.push(n);
    }
}

// sum them all
let sum = 0;
for(a=0; a<arrayToSum.length; a++){
    sum = sum + arrayToSum[a]
}

console.log(sum);
// => 233168