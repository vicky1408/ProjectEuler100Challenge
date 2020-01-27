exports.main = function(nGrid)
{

    nGrid = parseInt(nGrid);
    console.log("Grid Type : " + nGrid + "x" + nGrid);
    let arr2d = [...Array(nGrid+1).keys()];

    arr2d.every(function(currentVal, currentIndex)
    {
        arr2d[currentIndex] = [...Array(nGrid+1)];
        return true;
    });

    arr2d.every(function(currentArray, row)
    {
        currentArray.every(function(currentVal, column)
        {
            if(row === 0 && column === 0)
            {
                currentArray[column] = 0;
            }
            else if(row === 0 || column === 0)
            {
                currentArray[column] = 1;
            }
            else
            {
                currentArray[column] = arr2d[row][column-1] + arr2d[row-1][column];
            }
            return true;
        });
        return true;
    });


    console.log("Count of Path " + arr2d[nGrid][nGrid]);
}