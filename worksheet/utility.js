/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

export function compare(arr1, arr2) {
  if (arr1.toString() == arr2.toString()) {
    return true;
  }
  return false;
}

export function largest(arr){
  let largestNum = arr[0];
  for (const number of arr) {
    if (number > largestNum){
      largestNum = number;
    }
  }
  return largestNum;
}

export function zeroest(arr){
  let closestInt = arr[0];
  for (const number of arr) {
    if (abs(0 - number) < abs(0 - closestInt)){
      closestInt = number;
    }
  }
  return closestInt;
}

function abs(num) {
  return parseInt((num ** 2) ** 0.5);
}