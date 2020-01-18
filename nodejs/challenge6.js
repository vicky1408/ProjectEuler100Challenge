exports.main = function(n) {
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