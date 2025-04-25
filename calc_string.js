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
  
  //Delimiter core...
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    if (delimiterEnd < 0) {
        throw new Error("Invalid delimiter format: Missing newline after delimiter definition.");
    }
    delimiter = numbers.substring(2, delimiterEnd);
    numbersString = numbers.substring(delimiterEnd + 1);
    if (delimiter === "") {
        throw new Error("Delimiter cannot be empty");
    }
    // Escape special regex characters in the delimiter.  Important for user-defined delimiters.
    delimiter = delimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

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

// Test case 4: Multiple numbers
function testMultipleNumbers() {
  checkTestCase(add("1,2,3,4,5"), 15, "Test Case 4: Multiple numbers");
}

// Test case 5: Newline delimiter
function testNewlineDelimiter() {
  checkTestCase(add("1\n2,3"), 6, "Test Case 5: Newline delimiter");
}

// Test case 6: Different delimiter
function testDifferentDelimiter() {
  checkTestCase(add("//;\n1;2"), 3, "Test Case 6: Different delimiter");
}

// Run the tests....
testEmptyString();
testSingleNumber();
testTwoNumbers();
testMultipleNumbers();
testNewlineDelimiter();
testDifferentDelimiter();


