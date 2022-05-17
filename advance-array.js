//Advance Array


const array = [1,2,3,4,5]; //array to be used

//using forEach
const double = []; //need a holder for the new array without this the result will unidentified
const newArray = array.forEach ((num) => {
	double.push(num*2);
});
console.log('forEach',double)
//using forEach


//using map
const mapArray = array.map((num) => {
	return num*2; //return is needed without it the result will unidentified.
})

console.log('Map Array' , mapArray)
//using map


//using filter
const filterArray = mapArray.filter((num) => { //filter based on the conditioned
	return num > 5;
});
console.log('Filter Array' , filterArray)
//using filter


//using reduce
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0)

console.log('Reduce Array' , reduceArray);
//using reduce