// [1, 2, 3, 4, 5] return array that where each element at index i is the product of all the number in the array except the number at index i.//
const myArray = [1, 2, 3, 4, 5];
function myFunction(arr) {
  var result = []
  const p = arr.reduce((a, b) => a * b);
  //console.log(p);
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
  arr[i] = p/arr[i]  
};
  return arr;
}
myFunction(myArray)

