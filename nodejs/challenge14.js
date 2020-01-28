exports.main = function(inputVal)
{
    let limit = BigInt(inputVal);
    let startingNumber;
    let maxChain = 0;

    for(let i = limit; i > 1; i--)
    {
        let currentChain = 1;
        let currentVal = BigInt(i);

        while(currentVal > 1)
        {
            currentVal = CalculateVal(currentVal, (currentVal%2n))
            currentChain++;
        }

        if(currentChain > maxChain)
        {
            startingNumber = i;
            maxChain = currentChain;
        }
    }

    console.log("startingNumber : " + startingNumber);
    console.log("maxChain " + maxChain);
}

function CalculateVal(val, isOdd)
{
    let result;

    if(isOdd)
    {
        result = (val*3n) + 1n;
    }
    else
    {
        result = val/2n;
    }   

    return result;
}