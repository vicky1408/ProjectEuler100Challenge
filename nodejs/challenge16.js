exports.main = function(inputVal)
{

    inputVal = parseInt(inputVal);

    const powerOf2 = BigInt(Math.pow(2,inputVal));

    console.log(powerOf2);

    const result = powerOf2.toString().split('').reduce(
        function(accumalator, currentVal)
        {
            let temp = parseInt(accumalator) + parseInt(currentVal);
            return temp;
        }
    );
    
    console.log(result);
}