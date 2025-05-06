//const main = () => {}
//Exercise 1//////////////////////////////////////////
console.log("Exercise 1");
function ucFirstLetters(sentence){
    let mySentence = sentence;
    let words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

console.log(ucFirstLetters("los angeles") ); //Los Angeles

//Exercise 2/////////////////////////////////////////
console.log('Exercise 2');
function truncate(str, max){
    let sentence = str;
    let maxNumber = max;
    
    if(sentence.length > maxNumber){
        sentence = sentence.slice(0 , maxNumber);
        return `${sentence}...`;
    } else {
        return sentence;
    }
}

console.log(truncate('This text will be truncated if it is to long', 25));
// This text will be truncat...

//Exercise 3//////////////////////////////////////////////
console.log('Exercise 3');
const animals = ['Tiger', 'Tarantula']; 
console.log(animals);

animals.push('Lion', 'Tarantula');
console.log(animals);

animals.unshift('Bear', 'Monkey');
console.log(animals);

console.log(animals.sort());

function replaceMiddleAnimal(newValue){
    let index = 3;
    animals[index] = newValue;
    console.log(animals);
}

replaceMiddleAnimal('Whale');

function findMatchingAnimal (beginsWith){
    let foundAnimal = [];
    for (let i = 0; i < animals.length; i++) {
        if(animals[i][0] === beginsWith){
            foundAnimal.push(animals[i]);
        }  
    }
    return foundAnimal;
}

console.log(findMatchingAnimal('T'));

//Exercise 4////////////////////////////////////////////////////////
function camelCase(cssProp) { 
    let words = cssProp.split('-'); 
    let camelString = '';

    words.forEach(word => { 
        if (camelString.length == 0) { 
            //don't capitalize the first word 
            camelString = word; 
        } else { camelString += word.charAt(0).toUpperCase() + word.substring(1) 

        } 
    }); 
    
    return camelString; 
} 
const camelCase2 = (cssProp) => { 
    let camelString = ''; 
    
    for (let word of cssProp.split('-')) { 
        camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() + word.substring(1); 
    } 
    return camelString; 
} 
console.log(camelCase('margin-left')) // marginLeft 
console.log(camelCase2('background-image')) // backgroundImage 
console.log(camelCase('display')) // display

//Exercise 5////////////////////////////////////////////////////////
console.log('Exercise 5');
let twentyCents = 0.20;
let tenCents = 0.10;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) // 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2); 
console.log(fixedTwenty + fixedTen) //why is this not working

function currencyAddition(float1, float2){
    console.log(float1 +=".00");
    console.log(float2 +=".00");
}

currencyAddition("111", "22");

function currencyOperation(float1, float2, operation){
    let result;
    float1 = parseFloat(float1);
    float2 = parseFloat(float2);
    if(operation === '+'){
        result = float1 + float2;
    } else if(operation === "-"){
        result = float1 - float2;
    } else if(operation === "*"){
        result = float1 * float2;
    } else{
        result = float1 / float2;
    }
    
    return result;
}

console.log(currencyOperation(0.1, 0.2, "+"));
console.log('Exercise 5');
console.log(0.3 == currencyAddition(0.1, 0.2)) // true 
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

//Exersice 6//////////////////////////////////////////////////////////////////
console.log('Exercise 6');
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']; 
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

function unique(duplicatesArray){
    const uniqueArray = [...new Set(duplicatesArray)];
    return uniqueArray;
}

console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

//Exercise 7/////////////////////////////////////////////////////////////////
console.log('Exercise 6');
const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
function getBookTitle(bookId){
    return books.find(book => book.id === bookId);
}

let book = getBookTitle(2);
console.log(book);

console.log('Books before 1950:');
let oldBooks = books.filter(getOldBooks => getOldBooks.year < 1950);

console.log(oldBooks);

const newArray =books.map(obj => ({...obj, genre:'classic'}));
console.log(newArray);

console.log('Author');

let author = books.filter(getTitles => getTitles.author.charAt(0) === 'A');

console.log(author);



function latestBook(){
    let mostRecentBook = books[0];

    for (let i = 1; i < books.length; i++) {
        if (books[i].year > mostRecentBook.year) {
            mostRecentBook = books[i];
        }
    }
    return mostRecentBook;
}
const mostRecent = latestBook(books);
console.log('Year');
console.log(mostRecent);
//Exercise 8////////////////////////////////////////////////////////////////////
console.log('Exercise 8');
const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map();
phoneBookDEF.set('Dory', '0412312343') 
phoneBookDEF.set('Eliot', '0433221117') 
phoneBookDEF.set('Freddy', '0455221182')

for ( let name of phoneBookDEF.keys()){
    console.log(name);
}

for (let phoneNumber of phoneBookDEF.values()){
    console.log(phoneNumber);
}

phoneBookABC.set('Caroline', '04552478438')

function printPhoneBook(contacts){
    console.log(contacts);
}

printPhoneBook(phoneBookDEF);

const phoneBook1 = Object.fromEntries(phoneBookABC);
const phoneBook2 = Object.fromEntries(phoneBookDEF);

const phoneBook = {...phoneBook1, ...phoneBook2};
console.log(phoneBook);
console.log(Object.getOwnPropertyNames(phoneBook));

//Exercise 9///////////////////////////////////////////////////////
console.log('Exercise 9');
let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
};

function sumSalaries(salaries){
    let sum = 0;
    for (const key in salaries){
        sum += salaries[key];
    }
    return sum;
}

console.log(sumSalaries(salaries));

function topEarner(salaries){
    const values = Object.values(salaries);
    const highestValue = Math.max(...values);
    console.log(highestValue);
}

topEarner(salaries);

//Exercise 10//////////////////////////////////////////////
console.log('Exercise 10');
const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()); 
console.log(today.getHours() + ' hours have passed so far today');
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const totalMinutes = (hours * 60) + minutes;
const totalSeconds = (totalMinutes * 60) + seconds;
console.log(totalMinutes + ' minutes have passed so far today');
console.log(totalSeconds + ' second have passed so far today');


function ageCalculation(x, y, z){
    let years = (today.getFullYear() - x) - 1;
    let months = (today.getMonth() - y) + 12;
    let days = Math.abs(today.getDate() - z);

    console.log('You are years:' + years + ' month:' + months + ' days:' + days + ' old');
}
ageCalculation(1988,12,22);

function daysInBetween(date1, date2){
    let start = new Date(date1);
    let end = new Date(date2);
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    console.log(daysDifference);
}
daysInBetween('2025-04-01', '2025-04-21');
