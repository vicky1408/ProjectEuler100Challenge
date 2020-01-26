exports.main = function(nGrid)
{
    let arrVal = [];
    let count = 0;
    console.log(nGrid);

    for(let row = 0; row <= nGrid; row++)
    {
        for(let column = 0; column <= nGrid; column++)
        {
            // console.log(row + "," + column);
            arrVal[count++] = row + "," + column;
        }
    }

    console.log(arrVal);
}