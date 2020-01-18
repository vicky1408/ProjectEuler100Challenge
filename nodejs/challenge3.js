exports.main = function(intNumber) {
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
