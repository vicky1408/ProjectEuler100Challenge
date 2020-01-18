 exports.main = function(intNumber) {
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