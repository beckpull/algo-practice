// CHALLENGE TWO:

// function miniMaxSum(arr) {
//     // Write your code here
//     var newArr = arr.sort((a, b) => a - b);
//     let minSum = 0;
//     let maxSum = 0;
//     for (let i=0; i<4; i++) {
//         minSum += newArr[i];
//     } 
//     for (let i=1; i<5; i++) {
//         maxSum += newArr[i];
//     }
//     console.log(minSum, maxSum);
// }
// miniMaxSum([1, 2, 3, 4, 5]);


// CHALLENGE THREE:
// input: 07:05:45PM output: 19:05:45

// function timeConversion(s) {
//     var newTime = [];
//     var splitTime = s.split(':');
//     console.log(splitTime);
//     if (splitTime[2].slice(2,5) == 'PM' && splitTime[0] !== '12') {
//         var newHour = parseInt(splitTime[0]) + 12;
//         newTime.push(newHour);
//     } else if (splitTime[0] == '12' && splitTime[2].slice(2,5) == 'AM') {
//         var newHour = '00';
//         newTime.push(newHour);
//     } else {
//         var newHour = splitTime[0];
//         newTime.push(newHour);
//     }
//     newTime.push(splitTime[1]);
//     var newSecond = splitTime[2].slice(0,2);
//     newTime.push(newSecond);
//     var output = newTime.join(':');
//         console.log(output);
//         return output;
// }

// timeConversion('12:45:54PM')

// CHALLENGE FOUR:
// input: [12, 24, 10, 24]

// function breakingRecords(scores) {
//     var newArr = [];
//     var minRec = 0;
//     var maxRec = 0;
//     let min = scores[0];
//     let max = scores[0];
//     scores.forEach(score => {
//         if (score < min) {
//             minRec++;
//             min = score;
//         } else if (score > max) {
//             maxRec++;
//             max = score;
//         }
//     })
//     newArr.push(maxRec, minRec);
//     console.log(newArr);
//     return newArr;
// }

// breakingRecords([12, 24, 10, 24]);

// CHALLENGE FIVE:

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

// processData('S;M;plasticCup()');
// processData('C;V;mobile phone');
// processData('C;C;coffee machine');
// processData('S;C;LargeSoftwareBook');
// processData('C;M;white sheet of paper');
// processData('S;V;pictureFrame');
// processData('S;V;iPad');
// processData('C;M;mouse pad');
// processData('C;C;code swarm');
// processData('S;C;OrangeHighlighter');
processData("S;V;iPad\nC;M;mouse pad\nC;C;code swarm\nS;C;OrangeHighlighter")

















    // } else if (inputArr[0] == 'C') {
    //     if (inputArr[1] == 'M') {

    //     } else if (inputArr[1] == 'V') {
            
    //     } else if (inputArr[1] == 'C') {
            
    //     }

    // else if (char == char.toUpperCase()) {
    //     index1 = arg.indexOf(char);
    //     // console.log(newArg);
    //     // newArr.push(newArg.splice(0,index1));
    //     // newArr.push(newArg.splice(index1-1, newArg.length));
    // }
     // var index;
    // var index1;
    // var newArg;
    // console.log(inputArr);
    // var section = inputArr[2];
    // var arg = section.split('');
    // if (inputArr[0] == 'S') {
    //     // Move the declaration of newArg outside of the forEach loop
    //     arg.forEach(char => {
    //         if (char == '(' || char == ')') {
    //             index = arg.indexOf(char);
    //             let newArr = arg.splice(0, index);
    //             // console.log(newArr);
    //             newArg = newArr.join('');
    //         } 
    //     })
    //     var secondArr = newArg.split('');
    //     // console.log(secondArr);

    //     secondArr.forEach(char => {
    //         if (char == char.toUpperCase()) {
    //             index1 = secondArr.indexOf(char);
    //             console.log(index1);
    //             let newArr = newArg.split(char);
    //             console.log(newArr);
    //             let editWord = 
                
    //         }
    //     });
    // }

    // console.log(index1);
    // console.log(newArg);




// function processData(input) {
//     var inputArr = input.split(';');
//     var index;
//     var index1;
//     var newArg;
//     var newArr;
//     var newArr1;
//     console.log(inputArr);
//     var section = inputArr[2];
//     var arg = section.split('');
//     if (inputArr[0] == 'S') {
//        arg.forEach(char => {
//             if (char == '(' || char == ')') {
//                 index = arg.indexOf(char);
//                 let newArr = arg.splice(0, index);
//                 newArg = newArr.join('');
//             } else if (char == char.toUpperCase()) {
//                 index1 = arg.indexOf(char);
//                 console.log(newArg);
                
//             } 
//        })
//     }

//     console.log(index1);
//     console.log(newArg);
// } 


    // console.log(newestArg);
            //     for (char of newestArg) {
            //         if (char == char.toUpperCase()) {
            //             // let capIndex = newestArg.indexOf(char);
            //             const newLetter = char.toLowerCase();
            //             // console.log(capIndex, capLetter);
            //             let halfArg = newestArg.join('').split(char);
            //             // console.log(halfArg[1]);
            //             let splitWord = halfArg[1].split('');
            //             // console.log(splitWord);
            //             splitWord.unshift(newLetter);
            //             let newWord = splitWord.join('');
            //             let newLine = `${halfArg[0]} ${newWord}`;
            //             // console.log(newLine);
            //         }
            //     };
            // }; 