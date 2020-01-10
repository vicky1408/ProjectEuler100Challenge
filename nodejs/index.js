let arguments = process.argv.slice(2);

function challenge1(limit) {

    console.log(
        "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. \n" +
        "Find the sum of all the multiples of 3 or 5 below " + limit + "\n"
    );

    console.log("solution:");
    console.log("--------");


    const start = 1;
    let result = 0;
    const multiples = [3, 5];

    for (let i = start; i < limit; i++) {
        multiples.some(
            value => {
                if (i % value === 0) {
                    //uncomment for details
                    //console.log("multiple of " + value + " is " + i);
                    result += i;
                    return true;
                }
            }
        )
    }

    console.log("Sum of natural numbers below " + limit + " which are multiples of " + multiples + " is " + result + "\n");
}


function challenge2(maxValue) {
    console.log(
        "Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: \n" +
        "1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... \n" +
        "By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.\n"
    );

    console.log("solution:");
    console.log("--------");

    let secondLastNo = 1;
    let lastNo = 1;

    let arrFibonacci = [lastNo];
    let sumOfEvenFib = 0;
    let boolExecuteLoop = true;

    while (boolExecuteLoop) {
        let tempValue = lastNo;
        lastNo += secondLastNo;
        secondLastNo = tempValue;

        if (lastNo <= maxValue) {
            arrFibonacci.push(lastNo);

            //uncomment for Fibonacci generation sequence
            //console.log(arrFibonacci);

            if (lastNo % 2 === 0) {
                sumOfEvenFib += lastNo;
            }
        } else {
            boolExecuteLoop = false;
        }
    }

    console.log("Fibonacci: \n" + arrFibonacci);
    console.log("\n sum of fibonacci even related is " + sumOfEvenFib + " whose Fibonacci sequence values does not exceed " + maxValue + " (Actual Fibonacci last value : " + arrFibonacci[arrFibonacci.length - 1] + ") ");
}


function challenge3(intNumber) {
    console.log(
        "The prime factors of 13195 are 5, 7, 13 and 29. \n" +
        "What is the largest prime factor of the number "+ intNumber +" ? \n"
    );

    console.log("solution:");
    console.log("--------");

    let i = 2;
    let arrayPrimeFactor = [];
    let intlargestPrimeFactor = 1;
    let inputValue = intNumber;

    while (i <= intNumber)
    {
        if (intNumber % i === 0)
        {
            arrayPrimeFactor.push(i);
            if (intlargestPrimeFactor < i)
            {
                intlargestPrimeFactor = i;
            }

            // Uncomment for details
            // console.log("intNumber " + intNumber);
            // console.log("i " + i);
            // console.log("intNumber/i " + intNumber / i);

            intNumber = intNumber / i;
            i = 1;
        }
        i++;
    }

    console.log("Prime Factors of "+ inputValue +" : " + arrayPrimeFactor);
    console.log("Largest Prime Factor " + intlargestPrimeFactor);
}

function challenge4(intNumber) {
    console.log(
        "A palindromic number reads the same both ways. \nThe largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. \n" +
        "Find the largest palindrome made from the product of two 3-digit numbers. \n"
    );

    console.log("solution:");
    console.log("--------");

    let startNumber = (Math.pow(10, intNumber) - 1);
    let endNumber = Math.pow(10, (intNumber - 1));
    let result = 0;
    let compareValue = 0;
    let arrResult = [result];
    let arrPalindrome = [];
    
    let doLoop = true;
    for (let i = startNumber; i >= endNumber; i--)
    {
        for (let j = startNumber; j >= endNumber; j--)
        {
            result = Math.imul(i, j);
            arrResult = result.toString().split('');
            compareValue = parseInt(arrResult.reverse().join(''));

            if (result === compareValue)
            {
                arrPalindrome.push(result);
            }
        }
    }
    
    console.log("Largest palindrome made from the product of two " + intNumber + " digit number is '" + Math.max(...arrPalindrome) + "'");

}

function challenge5(intNumber) {
    console.log(
        "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. \n" +
        "What is the smallest positive number that is evenly divisible by all of the numbers from 1 to " + intNumber + "? \n"
    );

    console.log("solution:");
    console.log("--------");

    let FoundInteger = false;
    let result = intNumber;

    while (!FoundInteger)
    {
        result++;
        FoundInteger = true;

        for (let i = 1; i <= intNumber; i++)
        {
            if (result % i === 0 && FoundInteger === true)
            {
                FoundInteger = true;
            } else
            {
                FoundInteger = false;
                break;
            }
        }
    }

    if (FoundInteger)
    {
        console.log("Smallest Positive number that is evenly divisble by all numbers from 1 to " + intNumber + " is " + result);
    }

}


function challenge6(n) {
    console.log(
    "The sum of the squares of the first ten natural numbers is, \n" +
    "1(square) + 2(square) + ... + 10(square) = 385 \n \n" +

    "The square of the sum of the first ten natural numbers is, \n" +
    "(1 + 2 + ... + 10)(square) = 552 = 3025 \n \n" +

    "Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640. \n" +

    "Find the difference between the sum of the squares of the first " + n + " natural numbers and the square of the sum. \n"
    );

    console.log("solution:");
    console.log("--------");

    intNumber = parseInt(n);
    let sumOfNumbers = (intNumber * (intNumber + 1))/2;
    let sumOfSquareOfNumbers = 0;

    for(let i = 1; i <= intNumber; i++)
    {
        sumOfSquareOfNumbers += Math.pow(i,2);
    }
    
    const result = Math.pow(sumOfNumbers, 2) - sumOfSquareOfNumbers;

    console.log(result);
}


function challenge7(n) {
    console.log(
        "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. \n" +
        "What is the 10 001st prime number?"
    );

    console.log("solution:");
    console.log("--------");

    let arrPrime = [];
    let dividend = 2;
    let divisor = 1;

    while(arrPrime.length === n)
    {
        if(dividend % divisor === 0 && divisor <= dividend)
        {

            divisor++;
        }
        else
        {
            divisor = 1;
            dividend++;
        }
        arrPrime.push();
    }    

    for(let i = 1; i <= intNumber; i++)
    {
        sumOfSquareOfNumbers += Math.pow(i,2);
    }
    
    const result = Math.pow(sumOfNumbers, 2) - sumOfSquareOfNumbers;

    console.log(result);
}


switch (arguments[0]) {

    case '1':
        challenge1(arguments[1]);
        break;

    case "2":
        challenge2(arguments[1]);
        break;

    case "3":
        challenge3(arguments[1]);
        break;

    case "4":
        challenge4(arguments[1]);
        break;        

    case "5":
        challenge5(arguments[1]);
        break;    

    case "6":
        challenge6(arguments[1]);
        break;    

    case "7":
        challenge7(arguments[1]);
        break;
        
    default:
        console.log("Please provide valid input");
        break;
}