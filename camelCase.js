// CHALLENGE FIVE: easy

// S: SEPERATE
// C: COMBINE

// M: METHOD - ADD () TO END / BACK TO LOWER CASE AND SPACE SPERATED
// C: CLASS - UPPERCASE FIRST LETTER / BACK TO LOWER CASE AND SPACE SEPERATED
// V: VARIABLE - REGULAR CAMEL CASE / BACK TO LOWER CASE AND SPACE SEPERATED

// input:
// S;M;plasticCup()
// C;V;mobile phone
// C;C;coffee machine
// S;C;LargeSoftwareBook
// C;M;white sheet of paper
// S;V;pictureFrame

//output:
// plastic cup
// mobilePhone
// CoffeeMachine
// large software book
// whiteSheetOfPaper()
// picture frame

function processData(input) {
    var inputArr = input.split(';');
    // console.log(inputArr);
    const operation = inputArr[0];
    const type = inputArr[1];
    const arg = inputArr[2];
    const newArg = arg.split('');
    switch(operation) {
        case 'S':
            if (type == 'M') {

                let newestArg = newArg.filter(char => {
                    if (char == '(' || char == ')') {
                        return false;
                    } else {
                        return true;
                    }
                });
                let input = newestArg.join('');
                let stringWithSpaces = input.replace(/([A-Z])/g, ' $1');
                let output = stringWithSpaces.trim().toLowerCase();
                console.log(output);

            } else {

                let stringWithSpaces = arg.replace(/([A-Z])/g, ' $1');
                let output = stringWithSpaces.trim().toLowerCase();
                console.log(output);
            }
            break;
        case 'C':
            if (type == 'C') {
                let output = arg.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
                console.log(output);
            } else if (type == 'M') {
                let res = arg.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1));
                // console.log(typeof res);
                res.push("()");
                // console.log(res);
                const newRes = res.join('');
                // console.log(newRes);
                const lowerRes = newRes.charAt(0).toLowerCase() + newRes.slice(1);
                console.log(lowerRes);
            } else {
                let res = arg.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
                // console.log(res);
                const lowerRes = res.charAt(0).toLowerCase() + res.slice(1);
                console.log(lowerRes);
            };
            break;
        default:
            console.log('Error');
    }

}