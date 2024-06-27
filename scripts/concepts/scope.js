var oVar = "foo";
let oLet = "bar";

function insideFunc() {
  var inside = "inside function";
  console.log("var", oVar);
  console.log("let", oLet);
}


// insideFunc();
// console.log("inside", inside);

function getValue(condition) {
  if (condition) {
    var value = "Value";
    return value;
  } else {
    return value;
  }
}

// console.log("getValue: true", getValue(true));
// console.log("getValue: false", getValue(false));

function getValueLet(condition) {
  if (condition) {
    let value = "Value";
    return value;
  } else {
    return value;
  }
}

console.log("getValue: true", getValueLet(true));
console.log("getValue: false", getValueLet(false));