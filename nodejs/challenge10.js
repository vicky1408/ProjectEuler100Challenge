exports.main = function(n)
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