exports.main = function(n)
{
console.log("solution:");
console.log("--------");

let c = 3;

n = parseInt(n);
let doLoop = true;

while(doLoop)
{
    for(let b = 2; b < c; b++)
    {
        for(let a = 2; a < b; a++)
        {
            let sqA = Math.pow(a,2);
            let sqB = Math.pow(b,2);
            let sqC = Math.pow(c,2);
            let sqABSum = sqA + sqB;    

            if((sqABSum === sqC) && ((a+b+c) === n))
            {
            let sum = a+b+c;
            console.log("Result " + a+ " " + b + " " +c + " sum: " + sum);
            console.log("abc " + a*b*c);
            doLoop = false;
            break;
            }
        }

        if(!doLoop)
        {
            break;
        }
    }
    c++;
}
console.log(n);

}