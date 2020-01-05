function challenge1(limit)
{

    console.log("If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.");
    console.log("Find the sum of all the multiples of 3 or 5 below " + limit);
    console.log("\n");

    var start=1;
    var result = 0;
    var multiples = [3,5];

    for(var i=start; i < limit; i++)
    {
        multiples.some(
            value => {
                if(i%value === 0)
                {
                    //uncomment for details
                    //console.log("multiple of " + value + " is " + i);
                    result += i;
                    return true;
                }
            }
        )
    }

    console.log("Sum of natural numbers below " + limit + " which are multiples of " + multiples + " is " + result);
    console.log("\n");
}


var arguments = process.argv.slice(2);

switch (arguments[0]) {
    
    case '1':
        challenge1(arguments[1]);
        break;

    default:
        console.log("Please provide valid input");
        break;

}
