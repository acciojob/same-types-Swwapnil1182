function isSameType(value1, value2) {
  // Check if both are real NaN values
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if types match
  return typeof value1 === typeof value2;
}

// Convert prompt string to correct type
function parseInput(val) {
  if (val === "NaN") {
    return NaN;
  } else if (!isNaN(Number(val)) && val.trim() !== "") {
    return Number(val);
  }
  return val;
}

// Do not change below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

value1 = parseInput(value1);
value2 = parseInput(value2);

alert(isSameType(value1, value2));
