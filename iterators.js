// Iterator Map
const animals = ['Hen', 'elephant', 'llama', 'leopard', 
'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
      return animal[0];
})

console.log(secretMessage); // returns "HelloWorld";
// End Iterator Map

// Iterator forEach
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});
// End Iterator forEach