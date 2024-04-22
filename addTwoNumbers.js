// 2. Add Two Numbers
// Medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

//     The number of nodes in each linked list is in the range [1, 100].
//     0 <= Node.val <= 9
//     It is guaranteed that the list represents a number that does not have leading zeros.

var addTwoNumbers = function (l1, l2) {
    // const num1 = parseInt(l1.reverse().join('')); //=> this code forum does not support the reverse method
    // const num2 = parseInt(l2.reverse().join('')); //=> this code forum does not support the reverse method
    // const answer = (num1 + num2).toString().split('').reverse(); //=> this code forum does not support the reverse method
    // console.log(answer);
    // return answer;
    const arr1 = l1;
    const arr2 = l2;

    const newArr1 = [];
    const newArr2 = [];

    for (let i = arr1.length - 1; i >= 0; i--) {
        newArr1.push(arr1[i])
    };

    for (let i = arr2.length - 1; i >= 0; i--) {
        newArr2.push(arr2[i])
    };

    const sumArr = (parseInt(newArr1.join('')) + parseInt(newArr2.join(''))).toString().split('');
    const outputArr = [];

    for(let i = sumArr.length-1; i>=0; i--) {
        outputArr.push(parseInt(sumArr[i]));
    }

    // console.log(arr1);
    // console.log(newArr1);
    // console.log(sumArr);
    console.log(outputArr);

};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
addTwoNumbers([0], [0]);
addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);

