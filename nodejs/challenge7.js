 exports.main = function(n) {
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