function challenge1(limit)
{
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
}


var arguments = process.argv.slice(2);
challenge1(arguments[0]);