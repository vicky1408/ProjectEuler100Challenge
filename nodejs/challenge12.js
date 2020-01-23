exports.main = function(NoOfDivisors)
{
    let divisors = parseInt(NoOfDivisors);
    let naturalNo = 2;
    let modulo = 2;
    let finalTriangleNumber;
    let doLoop = true;

    let arrValue = Array();

    while(doLoop)
    {
        let nTriangular = sumofVal(naturalNo);
        finalTriangleNumber = nTriangular;

        while(Math.sqrt(nTriangular) >= modulo)
        {
            if(nTriangular % modulo === 0)
            {
                arrValue.push(nTriangular / modulo);
                if(modulo != (nTriangular / modulo))
                {
                    arrValue.push(modulo);
                }
            }
            modulo++;
        }

        arrValue.push(nTriangular); //since the number is divisible by itself.
        // console.log("arrValue " + arrValue);
        if((arrValue.length + 1) > divisors) //Add +1 to compensate on divisor '1'
        {
            doLoop = false;
            break;
        }
        arrValue = [];
        modulo = 2;
        naturalNo++;
    }
    console.log(finalTriangleNumber);
}

function sumofVal(val)
{
    let result = Math.imul(val,(val+1))/2;
    return result;
}