class Calculator {
    constructor() {
        this.id = Date.now()
    }
    #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`)
    }

    #log2 = (value2) => {
    console.log(`[Calculator :${this.id}]:${value2}`)
    
    }

    #log3 = (value3) => {
    console.log(`[Calculator :${this.id}]:${value3}`)
    
    }

    #log4 = (value4) => {
    console.log(`[Calculator :${this.id}]:${value4}`)
    
    }

    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)
        return value;
    }
    subtract(num1, num2){
        const value2 = num1 - num2;
        this.#log3(value2)
        return value2;
    }
    multiply(num1, num2){
        const value3 = num1 * num2;
        this.#log3(value3)
        return value3;
    }
    divide(num1, num2){
        const value4 = num1 / num2;
        this.#log4(value4)
        return value4;
    }
    
} 




module.exports = Calculator