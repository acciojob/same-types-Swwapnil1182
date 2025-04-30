

function isSameType(value1, value2) {
  // Handle NaN correctly
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Standard type check
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Important: Do NOT parse the values — keep original for correct NaN behavior
alert(isSameType(value1, value2));
