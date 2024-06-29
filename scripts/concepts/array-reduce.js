// Sum

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((prevValue, currValue) => {
  const nextValue = prevValue + currValue;
  return nextValue;
}, 0);

const product = arr.reduce((prev, curr) => {
  const next = prev * curr;
  return next;
}, 1);

// console.log('Sum: ', sum);
// console.log('Product: ', product);


const arr1 = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const segregate = arr1.reduce((prev, curr) => {
  const floored = Math.floor(curr);
  if (!prev[floored]) {
    prev[floored] = [];
  }
  prev[floored].push(curr);
  return prev;
}, {})

console.log(segregate);