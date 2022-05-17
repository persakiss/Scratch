//// Iterator Map ////
/// Map returns a new array
const animals = ['Hen', 'elephant', 'llama', 'leopard', 
'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => {
      return animal[0];
})
console.log(secretMessage); // returns "HelloWorld";
//// End Iterator Map





//// Iterator forEach ////
/// ForEach cycles through every item in array
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});
//// End Iterator forEach ////




//// Iterator Filter ////
/// Returns array with conditions
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
/// IndexOf provides the array index 
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(word => {
  return word === 'elephant';
}); // Finds index of word elephant

const startsWithS = animals.findIndex(word => {
    return word[0] === 's';
  }) // Finds index of word starting with s
/// End IndexOf Iterator ////





//// Reduce Iterator //////
/// Reduce adds values
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
} /* a second value could go here, eg ', 10' */ );

console.log(newSum);
///// End Reduce Iterator ///




//// Every, Filter, Some Iterators /////
/// Every, Some returns boolean value
/// Filter returns array
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;

const interestingWords = words.filter(word => {
  return word.length > 5;
})

console.log(interestingWords.every((word) => { 
  return word.length > 5;
} ));
//// Every, Filter, Some Iterators //// 



///// Iterator Review /////////
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
//////////////////