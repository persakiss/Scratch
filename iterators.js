//// Iterator Map ////
const animals = ['Hen', 'elephant', 'llama', 'leopard', 
'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
      return animal[0];
})

console.log(secretMessage); // returns "HelloWorld";
//// End Iterator Map





//// Iterator forEach ////
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});
//// End Iterator forEach ////




//// Iterator Filter ////

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
}) // Returns numbers less than 250


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
}) // Returns words with length > 7

//// End Iterator Filter ///