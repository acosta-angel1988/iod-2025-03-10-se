//Exercise 1/////////////////////////////////////////////////////////////////////////////////////////////
console.log("Exercise 1");
console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(!true); //false
console.log(6 / "3"); //2
console.log("2" * "3");//6
console.log(4 + 5 + "px");//9px 
console.log("$" + 4 + 5); //$45
console.log("4" - 2);//2
console.log("4px" - 2);//nan
console.log(" -9 " + 5);//-9 5
console.log(" -9 " - 5);//-14
console.log(null + 1);//1
console.log(undefined + 1);//1 
console.log(undefined == null);//true 
console.log(undefined === null); //false
console.log(" \t \n" - 2);// -2

//Exercise 2/////////////////////////////////////////////////////////////////////////////////////////////
console.log("Exercise 2");
let three = "3"
let four = "4" 
let thirty = "30" 
//what is the value of the following expressions? 
let addition = three + four // 34 Wrong because + concatenates two strings
let multiplication = three * four //12 right because  * convert string to numbers
let division = three / four //0.75 right because / convert strings to numbers
let subtraction = three - four //-1 right because - converts string to numbers

let lessThan1 = three < four //true right because 3 comes before 4
let lessThan2 = thirty < four //true wrong because 30 comes before 4

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
//Exercise 3/////////////////////////////////////////////////////////////////////////////////////////////
console.log("Exercise 3");
if (0) console.log('#1 zero is true') //zero equivalent to false, doesnt print
if ("0") console.log('#2 zero is true') //strings equivalent to true, prints
if (null) console.log('null is true') //null equivalent to false
if (-1) console.log('negative is true') //non-zero number equivalent to true, prints
if (1) console.log('positive is true') //non-zero number equivalent to true

//Exercise 4/////////////////////////////////////////////////////////////////////////////////////////////
console.log("Exercise 4");
let a = 2, b = 3; 
let result = `${a} + ${b} is `;

//Condition
(a + b < 10) ?  result += 'less than 10' : result += 'greater than 10'

console.log(result);
//Exercise 5/////////////////////////////////////////////////////////////////////////////////////////////
let name = 'Angel';

console.log("Exercise 5 Syntax");

function getGreeting(name) { 
    console.log('Hello ' + name + '!'); 
}

getGreeting(name);

console.log("Exercise 5 Arrow function");
const SayHi = (name) => console.log('Hello ' + name + '!');
SayHi(name);


//Exercise 6////////////////////////////////////////////////////////////////////////////////////////////
console.log("Exercise 6");
const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen',
    numFingers: 6 
} 
const inigo = { 
    firstName: 'Inigo',
    lastName: 'Rose',
    greeting(person) { 
        let greeting = `Hello ${person.name}, my name is ${this.firstName}, ${this.lastName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    },
    getCatchPhrase:(person) => person.numFingers == 6 ?
        'You killed my father. prepare to die' : 'Nice to meet you'
}   

inigo.greeting(westley)
inigo.greeting(rugen)

//Exercise 7//////////////////////////////////////////////////////////////////////////////////////////////
console.log("Exercise 7");
const basketballGame = { 
    score: 0, 
    freeThrow() { 
        this.score++;
        return this; 

    }, 
    basket() { 
        this.score += 2;
        return this; 
    }, 
    threePointer() { 
        this.score += 3;
        return this; 
    }, halfTime() { 
        console.log('Halftime score is '+this.score); 
    }, finalTime(){
        console.log('Fulltime score is '+this.score);
    } 
} 
//modify each of the above object methods to enable function chaining as below: 
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

basketballGame.basket().freeThrow().freeThrow().basket().threePointer().finalTime();

const gameFouls = {
    fouls: 0,
    firstQtr(){
        this.fouls+= 3;
        return this;
    },
    secondQtr(){
        this.fouls+= 2;
        return this;
    },
    thirdQtr(){
        this.fouls+= 4;
        return this;
    },
    fourQtr(){
        this.fouls+= 5;
        return this;
    }, 
    halfTimefouls() { 
        console.log('Halftime fouls is '+this.fouls); 
    }, 
    finalfouls(){
        console.log('Fulltime fouls is '+this.fouls);
    } 
}

gameFouls.firstQtr().secondQtr().halfTimefouls();
gameFouls.thirdQtr().fourQtr().finalfouls();

//Exercise 8///////////////////////////////////////////////////////////////////////////////////////////////
console.log('Exercise 8');
const sydney = { 
    name: 'Sydney', 
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney' 
}

for (const property in sydney){
    console.log(`${property}: ${sydney[property]}`);
}

const Orlando = { 
    name: 'Orlando', 
    population: 2.67,
    state: 'Florida',
    founded: '1878',
    timezone: 'East coast'
}
for (const property in Orlando){
    console.log(`${property}: ${Orlando[property]}`);
}
//Exercise 9///////////////////////////////////////////////////////////////////////////////////////////////
console.log("Exercise 9");
let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = ['Hockey', 'Cricket', 'Volleyball'];
moreSports.push('NFL', 'Baseball', 'Basketball');

let dog2 = dog1;
dog1 = 'Thor';

let cat2 = cat1;
cat1.name = 'Saturn';

console.log(cat1.name);
console.log(moreSports);
console.log(dog1);
console.log(cat2);

//Exercise 10 incomplete//////////////////////////////////////////////////////////////////////////////////////////////
console.log('Exercise 10');
function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 

    return {name, age};
}

let person1 = Person('Sandra', 55);

let person2 = {
    name: 'Angel',
    age: 36,
}

console.log(person1);
console.log(person2);

class PersonClass {
    Person(name, age){
        this.name = name; 
        this.age = age;
    }

}

let person3 = new PersonClass('Tina', 33);
console.log(person3);