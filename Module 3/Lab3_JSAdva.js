//Exercise 1//////////////////////////////////////
console.log('Exercise 1');

function makeCounter() { 
    let currentCount = 0; 
    
    return function() { 
        currentCount++; 
        console.log(currentCount) 
        return currentCount; 
    }; 
} 

let counter1 = makeCounter(); 
counter1(); // 1 
counter1(); // 2

let counter2 = makeCounter();
counter2();

console.log('counter function modification result:');
function makeCounterNew(startFrom) { 
    let currentCount = startFrom; 
    
    return function() { 
        currentCount++; 
        console.log(currentCount) 
        return currentCount; 
    }; 
} 

let counter = makeCounterNew(5);
counter();

console.log('counter function incrementBy:');
function makeCounterNewInc(startFrom, incrementBy) { 
    let currentCount = startFrom; 
    
    return function() { 
        currentCount += incrementBy; 
        console.log(currentCount) 
        return currentCount; 
    }; 
} 
let counterInc = makeCounterNewInc(5, 2);
counterInc();
//Exercise 2//////////////////////////////////////////
// answer a: will display first because doesn't have a delay time
console.log('Exercise 2');
const delayMsg = (msg) => console.log(`This message will be printed after a delay: " ${msg}`);
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');
clearTimeout(setTimeout(delayMsg, 20000, '#5: Delayed by 20000ms'));

//Exercise 3//////////////////////////////////////////
function debounce(func) { //answer for a)
    let timeout;

    return function() {
        clearTimeout(timeout);
    
        timeout = setTimeout(func, 1000);
    };
}
    function debounceB(func, ms) { //answer for b)
    let timeout;
    return function() {
    //clear the timer to cancel the previously queued function call
        clearTimeout(timeout);
    //reset the timer id for this most recent call to happen after the ms delay
        timeout = setTimeout(func, ms);
    };
}
    function printMeC(msg) {
        console.log(`printing debounced message c: ${msg}`)
}

printMeC = debounceC(printMeC, 1200)
setTimeout( printMeC, 100, 'msg #1');
setTimeout( printMeC, 200, 'msg #2');
setTimeout( printMeC, 300, 'msg #3');

function debounceC(func, ms) { //answer for c)
    let timeout;
    return function(msg) {
    //clear the timer to cancel the previously queued function call
    clearTimeout(timeout);
    //reset the timer for this most recent call to happen after the ms delay
    timeout = setTimeout(func, ms, msg);
    };
}

//Exercise 4////////////////////////////////////////////////////////////////////////////////////////
console.log('Exercise 4');
let num1 = 0;
let num2 = 1;
let sum;
let intervalId;

function fibonacciSequence() {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(num1);
}

function startFibonacci(interval) {
    intervalId = setInterval(fibonacciSequence, interval);
}

function stopFibonacci() {
    clearInterval(intervalId);
    console.log('Fibonacci sequence stopped.');
}


startFibonacci(1000);


setTimeout(stopFibonacci, 10000);

function printFibonacciTimeouts() { 
    let [first, second] = [1, 1]
    console.log(first)
    console.log(second)

    setTimeout(function printNext(first, second) {
        let next = first+second;
        console.log(next);
        setTimeout(printNext, 1000, second, next);
    }, 1000, first, second);

}

function printFibonacciLimit(limit){
    let first = 1;
    let second = 1;
    console.log(first)
    console.log(second)
    let counter = 2; //we already printed the first two numbers
    let intervalRef = setInterval(function printNext() {
        let next = first+second;
        console.log(next)

        first = second; 
        second = next; 
        counter++; 

        if (counter == limit) clearInterval(intervalRef) 
    }, 1000)

}

//Exercise 5////////////////////////////////////////////////////////////////////////////
console.log('Exercise 5');
let car = { 
    make: "Porsche", 
    model: '911', 
    year: 1964,

    description() { 
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
    } 
}; 

car.description(); 

setTimeout(() => car.description(), 200); 

car = {
    ...car,
    year: 11988,
}

let describeCar = car.description.bind(car); 

setTimeout(describeCar, 400); 

car = {...car, year: 2020}
//Exersice 6////////////////////////////////////////////////////////////////////////////////////
console.log('Exercise 6');

function multiply(a, b) { 
    console.log( a * b ); 
} 

//multiply.delay(500)(5, 5); 

Function.prototype.delay = function(ms) { 
    let originalFunction = this; 
    return function(arg1, arg2) { 
        setTimeout(originalFunction, ms, arg1, arg2); 
    } 
}; 

multiply.delay(200)(5, 5);  

Function.prototype.delayB = function(ms) { 
    let originalFunction = this;
    return function() { 
        setTimeout(() => originalFunction.apply(this, arguments), ms); 
    } 
}; 

function multiply4(a, b, c, d) {
    console.log( a * b * c * d); 
} 

multiply4.delayB(500)(5, 5, 5, 5);
//Exercise 7//////////////////////////////////////////////////////////////////////////////
class DigitalClock { 
    constructor(prefix) { 
        this.prefix = prefix; 
    } 
    
    display() { 
        let date = new Date(); 
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins; 
        if (secs < 10) secs = '0' + secs; 
        
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`); 
    } 
    
    stop() { 
        clearInterval(this.timer);
    } 
    
    start() { 
        this.display(); 
        this.timer = setInterval(() => this.display(), 1000); 
    } 
}

const myClock = new DigitalClock('my clock:') 
myClock.start()

class PrecisionClock extends DigitalClock { 
    constructor(prefix, precision) { 
        super(prefix); 
        this.precision = precision ? precision : 1000;
    } 
    
    start() { 
        this.display(); 
        this.timer = setInterval(() => this.display(), this.precision); 
    }
} 
const myPrecisionClock = new PrecisionClock('my precision clock:', 2000) 
myPrecisionClock.start() 

class AlarmClock extends DigitalClock { 
    constructor(prefix, wakeupTime) { 
        super(prefix); 
        this.wakeupTime = wakeupTime ? wakeupTime : '07:00' 
    } 
    
    checkDisplay() { 
        const now = new Date(); 
        const wakeupHours = this.wakeupTime.substring(0, 2); 
        const wakeupMins = this.wakeupTime.substring(3) 
        
        if (now.getHours() == wakeupHours && now.getMinutes() == wakeupMins) { 
            console.log('Wake Up!'); 
            this.stop(); 
        } else { 
            this.display(); 
        } 
    } 
    
    start() { 
        this.checkDisplay(); 
        this.timer = setInterval(() => this.checkDisplay(), 1000); 
    } 
} 

const myAlarmClock = new AlarmClock('my alarm clock:', '17:00') 
myAlarmClock.start()

//Exercise 8///////////////////////////////////////////////////////
console.log('Exercise 8');

function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(', ')}`; 
}  

function validateStringArg(fn) { 
    return function (arg) { 
        if (typeof arg !== "string") { 
            throw new Error("Argument must be a string"); 
        } 
        return fn(arg); 
    }; 
}  
function validateStringArgs(fn) { 
    return function() { 
        for (let arg of arguments) { 
            if (typeof arg !== "string") { 
                throw new Error(`Argument ${arg} must be a string`); 
            } 
        } 
        return fn.apply(this, arguments); 
    }; 
}  
const validatedOrderItem1 = validateStringArg(orderItems); 
const validatedOrderItems = validateStringArgs(orderItems);  
try { 
    console.log(validatedOrderItem1("Apple Watch")); 
    console.log(validatedOrderItem1(123)); 
    console.log(validatedOrderItems("Apple Watch", "Airpods")); 
    console.log(validatedOrderItems("abc", 123));  
} catch (err) { 
    console.log(err) 
}

//Exercise 9///////////////////////////////////////////////////////////////////
function randomDelay() {  
    let delay = Math.ceil(Math.random() * 20); 
    return new Promise(resolve => setTimeout(resolve, delay*1000)); 
} 

randomDelay() 
    .then((delay) => console.log('There appears to have been a delay.')); 

function randomDelayB() { 
    let delay = Math.ceil(Math.random() * 20); 
    
    return new Promise((resolve, reject) => 
        setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000));
} 

randomDelayB() 
    .then(() => console.log('Successful delay')) 
    .catch(() => console.log('Failed delay'));     
    
function randomDelayD() { 
    let delay = Math.ceil(Math.random() * 20); 
    
    return new Promise((resolve, reject) =>
        setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000, delay)); 
} 
randomDelayD() 
    .then((delay) => console.log('Successful delay of '+delay+' seconds')) 
    .catch((delay) => console.log('Failed delay of '+delay+' seconds'));

//Exercise 10///////////////////////////////////////////////////////////////
console.log('Exercise 10');
import fetch from 'node-fetch' 
globalThis.fetch = fetch 

function fetchURLData(url) { 
    let fetchPromise = fetch(url).then(response => { 
        if (response.status === 200) { 
            return response.json(); 
        } else { 
            throw new Error(`Request failed with status ${response.status}`); 
        } 
    }); 
    return fetchPromise; 
} 

fetchURLData('https://jsonplaceholder.typicode.com/todos/1') 
    .then(data => console.log(data)) 
    .catch(error => console.error(error.message));

    fetchURLData('https://jsonplaceholder.typicode.com/todos/1')  
        .then(data => console.log(data))
        .catch(error => console.error(error.message)); 
        
async function asyncFetchURLData(url) { 
    let fetchResponse = await fetch(url); 
    if (fetchResponse.status === 200) { 
        let responseJson = await fetchResponse.json(); 
        return responseJson; 
    } else { 
        throw new Error(`Request failed with status ${fetchResponse.status}`); 
    } 
} 

async function asyncFetchMultipleURLData(urls) { 
    return Promise.all(urls.map(async (url) => { 
        let response = await fetch(url); 
        return response.json(); 
    })); 
} 

try { 
    let responseData1 = await 
asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/1'); 
    console.log(responseData1)
    
    let responseData2 = await asyncFetchMultipleURLData(['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2']); 
    console.log(responseData2) 
    
    let responseData3 = await asyncFetchURLData('https://jsonplaceholder.typicode.com/fake'); console.log(responseData3) 
} catch (error) { 
    console.log(error.message); 
}