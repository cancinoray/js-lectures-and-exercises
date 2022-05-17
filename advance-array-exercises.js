// Solve the below questions:


////////////////////////////***///////////////////////////
// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log('Solution No. 1:' , array.flat(2));
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
//syntax: array.flat(depth), depth automatically equal 1.




////////////////////////////***///////////////////////////
// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log('Solution No. 2:' , greeting.flatMap(x => x.join(' ')))
//The flatMap() method returns a new array formed by applying a given callback function to each element of the array,
//and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1,
//but slightly more efficient than calling those two methods separately.




////////////////////////////***///////////////////////////
//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

const newGreeting = greeting.flatMap(x => x.join(' '))
console.log('Solution No. 3:' , newGreeting.join(' '))
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
//separated by commas or a specified separator string.
//If the array has only one item, then that item will be returned without using the separator. 



////////////////////////////***///////////////////////////
//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log('Solution No. 4:' , trapped.flat(Infinity));
// Infintiy is actually a LARGE number in JavaScipt.
//It represents the maximum amount of memory that we can hold for a number!
//Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity


////////////////////////////***///////////////////////////
//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log('Solution No. 5:' , userEmail3.trimEnd().trimStart());


////////////////////////////***///////////////////////////
//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users)
console.log('Solution No. 6:' , usersArray)
//


////////////////////////////***///////////////////////////
//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])
console.log('Solution No. 7:', updatedUsersArray )


////////////////////////////***///////////////////////////
//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log('Solution No. 8:' , updatedUsers)