function add (numbers) {
  // 1. Handle empty string...
  if (numbers === '') {
    return 0;
  }
  console.log("numbers", numbers)
  // Initial Variables...
  let delimiter = ","; 
  let numbersString = numbers;

  const numStrings = numbersString.split(new RegExp(`[${delimiter}\n]`));

  // Parse numbers and handle negatives...
  const nums = numStrings.map((numString) => {
    const num = parseInt(numString, 10);
    if (isNaN(num)) {
      return 0;
    }
    return num;
  });

  // Calculate the sum
  return nums.reduce((sum, num) => sum + num, 0);
}

// Core TestCase function...
function checkTestCase(actual, expected, testName) {
  if (actual === expected) {
    console.log(`PASSED: ${testName}`);
  } else {
    console.error(`FAILED: ${testName}`);
    console.error(`Expected: ${expected}`);
    console.error(`ACTUAL: ${actual}`);
  }
}

// Test case 1: Empty string...
function testEmptyString() {
  checkTestCase(add(""), 0, "Test Case 1: Empty string");
}

// Test case 2: Single number
function testSingleNumber() {
  checkTestCase(add("1"), 1, "Test Case 2: Single number");
}

// Test case 3: Two numbers
function testTwoNumbers() {
  checkTestCase(add("1,2"), 3, "Test Case 3: Two numbers");
}

// Test case 4: Multiple numbers
function testMultipleNumbers() {
  checkTestCase(add("1,2,3,4,5"), 15, "Test Case 4: Multiple numbers");
}

// Run the tests....
testEmptyString();
testSingleNumber();
testTwoNumbers();
testMultipleNumbers();


