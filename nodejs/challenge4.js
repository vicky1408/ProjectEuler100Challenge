exports.main = function(intNumber) {
    console.log(
        "A palindromic number reads the same both ways. \nThe largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. \n" +
        "Find the largest palindrome made from the product of two 3-digit numbers. \n"
    );

    console.log("solution:");
    console.log("--------");

    let startNumber = (Math.pow(10, intNumber) - 1);
    let endNumber = Math.pow(10, (intNumber - 1));
    let result = 0;
    let compareValue = 0;
    let arrResult = [result];
    let arrPalindrome = [];
    
    let doLoop = true;
    for (let i = startNumber; i >= endNumber; i--)
    {
        for (let j = startNumber; j >= endNumber; j--)
        {
            result = Math.imul(i, j);
            arrResult = result.toString().split('');
            compareValue = parseInt(arrResult.reverse().join(''));

            if (result === compareValue)
            {
                arrPalindrome.push(result);
            }
        }
    }
    
    console.log("Largest palindrome made from the product of two " + intNumber + " digit number is '" + Math.max(...arrPalindrome) + "'");

}