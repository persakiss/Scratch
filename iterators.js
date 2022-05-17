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
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});
//// End Iterator forEach ////




//// Iterator Filter ////
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
}) // Returns numbers less than 250


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
}) // Returns words with length > 7
//// End Iterator Filter ///







//// IndexOf Iterator ////
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(word => {
  return word === 'elephant';
}); // Finds index of word elephant

const startsWithS = animals.findIndex(word => {
    return word[0] === 's';
  }) // Finds index of word starting with s
/// End IndexOf Iterator ////