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
        "What is the prime number at index " + n + " ?"
    );

    console.log("solution:");
    console.log("--------");

    let arrPrime = [];
    let dividend = 2;
    let divisor = 2;

    let isPrime = true;

    while(arrPrime.length < n)
    {
        for(i=divisor; i< dividend; i++)
        {
            if(dividend % i === 0)
            {
                isPrime = false;
                break;
            }
        }

        if(isPrime)
        {
            arrPrime.push(dividend);
        }

        isPrime = true;
        dividend++;
        divisor = 2;
    }

    console.log(arrPrime);
    console.log(arrPrime[n-1]);
}

function challenge8(n)
{
    console.log(
        "The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832. \n" +
        "73167176531330624919225119674426574742355349194934 \n"  +
        "96983520312774506326239578318016984801869478851843 \n"  +
        "85861560789112949495459501737958331952853208805511 \n"  +
        "12540698747158523863050715693290963295227443043557 \n"  +
        "66896648950445244523161731856403098711121722383113 \n"  +
        "62229893423380308135336276614282806444486645238749 \n"  +
        "30358907296290491560440772390713810515859307960866 \n"  +
        "70172427121883998797908792274921901699720888093776 \n"  +
        "65727333001053367881220235421809751254540594752243 \n"  +
        "52584907711670556013604839586446706324415722155397 \n"  +
        "53697817977846174064955149290862569321978468622482 \n"  +
        "83972241375657056057490261407972968652414535100474 \n"  +
        "82166370484403199890008895243450658541227588666881 \n"  +
        "16427171479924442928230863465674813919123162824586 \n"  +
        "17866458359124566529476545682848912883142607690042 \n"  +
        "24219022671055626321111109370544217506941658960408 \n"  +
        "07198403850962455444362981230987879927244284909188 \n"  +
        "84580156166097919133875499200524063689912560717606 \n"  +
        "05886116467109405077541002256983155200055935729725 \n"  +
        "71636269561882670428252483600823257530420752963450 \n"  +

        "Find the " + n + " adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product? \n"
    );

    console.log("solution:");
    console.log("--------");

    n = parseInt(n);
    const number = BigInt('7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450');
    const arrNumber = number.toString().split('');

    let multiplierVal = BigInt('1');
    let numberMax = BigInt('1');

    arrNumber.every(function(value, index){
        let i = 1;
        let newVal = value;

        if(value == '0')
        {
            return true;
        }

        while(i < n)
        {
            if(arrNumber[index+i] == '0')
            {
                newVal = 0;
                break;
            }
            newVal = newVal.concat(arrNumber[index+i]);
            i++;
        }
        
        if(newVal == '0')
        {
            return true;
        }

        
        newVal.toString().split('').every(function(currentValue) {
            return multiplierVal *= BigInt(currentValue);
        });

        if(numberMax < multiplierVal)
        {
            numberMax = multiplierVal;
        }
        multiplierVal = BigInt('1');
        return true;
    });

    console.log(numberMax);
}

function challenge9(n)
{
console.log("solution:");
console.log("--------");

let c = 3;

n = parseInt(n);
let doLoop = true;

while(doLoop)
{
    for(let b = 2; b < c; b++)
    {
        for(let a = 2; a < b; a++)
        {
            let sqA = Math.pow(a,2);
            let sqB = Math.pow(b,2);
            let sqC = Math.pow(c,2);
            let sqABSum = sqA + sqB;    

            if((sqABSum === sqC) && ((a+b+c) === n))
            {
            let sum = a+b+c;
            console.log("Result " + a+ " " + b + " " +c + " sum: " + sum);
            console.log("abc " + a*b*c);
            doLoop = false;
            break;
            }
        }

        if(!doLoop)
        {
            break;
        }
    }
    c++;
}
console.log(n);

}
function challenge10(n)
{
    console.time('Execution Time: ');
    n = parseInt(n)-1;
    let startAt = 2
    let arr1 = [...Array(n-1).keys()].map(i => i + startAt);
    let SqRoot = Math.floor(Math.sqrt(n));
    let primeIndex = 0;
    let primeFactor = arr1[primeIndex];

    while(SqRoot >= primeFactor)
    {
      arr1 = arr1.filter(function(value, index) {
            if(value > primeFactor)
            {
              return value % primeFactor;
            }
            else
            {
              return true;
            }
          });
      primeIndex++;
      primeFactor = arr1[primeIndex];    
    }

    const result = arr1.reduce(function(accumalator, currentValue) {
      return accumalator + currentValue;
    });

    console.log(result);
    console.timeEnd('Execution Time: ');
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
    
    case "8":
        challenge8(arguments[1]);
        break;

    case "9":
        challenge9(arguments[1]);
        break;

    case "10":
        challenge10(arguments[1])
        break;
            
    default:
        console.log("Please provide valid input");
        break;
}