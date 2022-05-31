// Creating a callback function
const cbf = () => console.log("I'm getting passed");

// Function that takes a value and returns a function which takes another value (a function);
const hof = inp => {
    console.log(`You said ${inp}`);
    return(something) => something();
}

hof('such and such')(cbf) 
