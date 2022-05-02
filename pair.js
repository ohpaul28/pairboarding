// const helper = (num) => {
//   let newNum = 0;
//   while (num > 0) {
//     console.log('looping')
//     newNum += num % 10
//     num = Math.floor(num/10)
//   }
//   return newNum;
// }

// const digitalRoot = (num) => {
//   while (num > 10) {
//     num = helper(num)
//   }
//   return num;
// }
// // split the number into its individual numbers
// // sum them together and recursively call the function until the number is less than 10


// console.log(digitalRoot(367))

// const caesarCipher = (message, num) => {
//   const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//   let placeholder = ''
//   for (let i = 0; i < message.length; i++) {
//     let curr = message[i]
//     if (curr === ' ') {
//       placeholder+=' '
//       continue
//     }
//     let currIndex = alphabet.indexOf(curr)

//     placeholder += (alphabet[(currIndex + num) % 26])
//   }
//   return placeholder;
// }

// console.log(caesarCipher('hello worldzyx', 3))


// const fibsSum = (n) => {
//   if (n === 1) return 1;
//   if (n === 2) return 1;
//   return fibsSum(n - 1) + fibsSum(n - 2)
// }

// console.log(fibsSum(8))


// const isPalindrome = (word) => {
//   let startIndex = 0
//   let endIndex = word.length - 1
//   while (startIndex <= endIndex) {
//     let start = word[startIndex]
//     let end = word[endIndex]
//     // console.log(start, end)
//     if (start !== end) return false;
//     startIndex++;
//     endIndex--;
//   }
//   return true;
// }


// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('eeijkiee'))


// Array.prototype.myMap = function(func) {
//   let newArr = [];
//   this.forEach((ele) => newArr.push(func(ele)))
//   return newArr;
// }


// const addTwo = (num) => {
//   return num + 2
// }

// // myMap([1,2,3,4], addTwo)

// Array.prototype.myMap = function(fn) {
//   const final = [];
//   this.forEach((el) => {
//     final.push(fn(el));
//   });

//   return final;
// };

// let arr = [1,2,3,4]
// console.log(arr.myMap(addTwo))


// SELECT employees.* FROM employees e JOIN  departmentName = some variable

// SELECT COUNT(*) FROM users;

// SELECT COUNT(*) FROM users WHERE users.active = true;

// SELECT COUNT(*) FROM users WHERE users.lastVisited < timePeriod
