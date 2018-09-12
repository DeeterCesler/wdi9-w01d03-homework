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
