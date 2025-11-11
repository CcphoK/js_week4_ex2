/**
 * TODO 1: Create a function called sum that takes a parameter and calculates 
 * all numbers from 0 to the parameter.
 * Must check if parameter is an integer first without using isInteger() method.
 */
function sum(parameter) {
    // Check if parameter is a number without using isInteger()
    if (typeof parameter !== 'number' || parameter % 1 !== 0) {
        return "The value passed is not a number";
    }
    
    // Handle negative numbers
    if (parameter < 0) {
        return "Please provide a positive integer";
    }
    
    // Calculate sum from 0 to parameter
    let total = 0;
    for (let i = 0; i <= parameter; i++) {
        total += i;
    }
    return total;
}

/**
 * TODO 2: Create a function called factorial that takes a number as parameter
 * and returns the factorial of that number.
 */
function factorial(number) {
    // Handle edge cases
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    
    // Calculate factorial
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

/**
 * TODO 3: Create a function called funkyMath with different behaviors
 * based on the number of arguments.
 */
function funkyMath() {
    const args = arguments;
    const argCount = args.length;
    
    switch(argCount) {
        case 2:
            // Subtract first from second
            return args[1] - args[0];
            
        case 3:
            // Add all 3 numbers
            return args[0] + args[1] + args[2];
            
        case 4:
            // Add (1+2) and (3+4), then divide
            const sum1 = args[0] + args[1];
            const sum2 = args[2] + args[3];
            
            if (sum2 === 0) {
                return "Cannot divide by zero";
            }
            return sum1 / sum2;
            
        default:
            return "Invalid number of arguments. Expected 2, 3, or 4 arguments.";
    }
}

/**
 * TODO 4: Create a loop that removes all odd numbers from an array
 * and adds them to a new array, sorted from smallest to largest.
 */
function separateAndSortNumbers() {
    const originalArray = [1, 2, 33, 45, 6, 44];
    const evenNumbers = [];
    const oddNumbers = [];
    
    // Separate even and odd numbers
    for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] % 2 === 0) {
            // Even number - keep in original array (conceptually)
            evenNumbers.push(originalArray[i]);
        } else {
            // Odd number - add to new array
            oddNumbers.push(originalArray[i]);
        }
    }
    
    // Sort odd numbers from smallest to largest
    oddNumbers.sort((a, b) => a - b);
    
    return {
        originalArray: originalArray,
        evenNumbers: evenNumbers,
        oddNumbers: oddNumbers
    };
}

/**
 * TODO 5-7: Object manipulation
 * Create object, add property, delete property
 */
function objectManipulation() {
    // TODO 5: Create object called 'me'
    const me = {
        firstName: "Sisipho",
        lastName: "Keswa",
        age: 21,
        favouriteColour: "Black",
        dreamCar: "Rolls Royce Phantom"
    };
    
    console.log("Original object:", me);
    
    // TODO 6: Add new property 'favourite food'
    me.favouriteFood = "Pizza";
    console.log("After adding favourite food:", me);
    
    // TODO 7: Delete the age property
    delete me.age;
    console.log("After deleting age property:", me);
    
    return me;
}

