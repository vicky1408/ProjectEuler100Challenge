let arguments = process.argv.slice(2);

let challenge1 = require('./challenge1');
let challenge2 = require('./challenge2');
let challenge3 = require('./challenge3');
let challenge4 = require('./challenge4');
let challenge5 = require('./challenge5');
let challenge6 = require('./challenge6');
let challenge7 = require('./challenge7');
let challenge8 = require('./challenge8');
let challenge9 = require('./challenge9');
let challenge10 = require('./challenge10');
let challenge11 = require('./challenge11');
let challenge12 = require('./challenge12');

switch (arguments[0]) {

    case "1":
        console.time('Execution Time: ');
        challenge1.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;    
        
    case "2":
        console.time('Execution Time: ');
        challenge2.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;

    case "3":
        console.time('Execution Time: ');
        challenge3.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;

    case "4":
        console.time('Execution Time: ');
        challenge4.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;        

    case "5":
        console.time('Execution Time: ');
        challenge5.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;    

    case "6":
        console.time('Execution Time: ');
        challenge6.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;    

    case "7":
        console.time('Execution Time: ');
        challenge7.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;
    
    case "8":
        console.time('Execution Time: ');
        challenge8.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;

    case "9":
        console.time('Execution Time: ');
        challenge9.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;

    case "10":
        console.time('Execution Time: ');
        challenge10.main(arguments[1]);
        console.timeEnd('Execution Time: ');
        break;

    case "11":
        console.time('Execution Time: ');
        challenge11.main();
        console.timeEnd('Execution Time: ');
        break;
            
    
    case "12":
        console.time('Execution Time: ');
        challenge12.main();
        console.timeEnd('Execution Time: ');
        break;
        
    default:
        console.log("Please provide valid input");
        break;
}