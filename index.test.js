const {
  getString,
  getArrayFirstElement,
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  checkIfOdd,
  checkIfEven,
  checkIfGreaterThanTen,
  concatenateStrings,
  checkIfStringEmpty,
  capitalizeString,
  checkIfTrue,
  checkIfTrueWithCustomResponse,
  accessThirdElement,
  findArrayLength,
  checkIfArrayEmpty,
  createObject,
  findMaxNumber,
  checkArrayForValue,
  doubleArrayValues,
  reverseString,
  addAllNumbers,
} = require("./index");

describe("getString", () => {
  test("returns the provided string", () => {
    expect(getString("Hello")).toBe("Hello");
  });
});

describe("getArrayFirstElement", () => {
  test("returns the first element of the array", () => {
    expect(getArrayFirstElement([1, 2, 3])).toBe(1);
  });
});

describe("addNumbers", () => {
  test("adds two numbers together", () => {
    expect(addNumbers(3, 5)).toBe(8);
  });
});

describe("subtractNumbers", () => {
  test("subtracts num2 from num1", () => {
    expect(subtractNumbers(10, 4)).toBe(6);
  });
});

describe("multiplyNumbers", () => {
  test("multiplies two numbers together", () => {
    expect(multiplyNumbers(3, 4)).toBe(12);
    expect(multiplyNumbers(-2, 5)).toBe(-10);
  });
});

describe("checkIfOdd", () => {
  test("returns true if the number is odd", () => {
    expect(checkIfOdd(3)).toBe(true);
    expect(checkIfOdd(4)).toBe(false);
  });
});

describe("checkIfEven", () => {
  test("returns true if the number is even", () => {
    expect(checkIfEven(4)).toBe(true);
    expect(checkIfEven(3)).toBe(false);
  });
});

describe("checkIfGreaterThanTen", () => {
  test("returns true if the number is greater than 10", () => {
    expect(checkIfGreaterThanTen(15)).toBe(true);
    expect(checkIfGreaterThanTen(8)).toBe(false);
    expect(checkIfGreaterThanTen(10)).toBe(false);
  });
});

describe("concatenateStrings", () => {
  test("concatenates two strings together", () => {
    expect(concatenateStrings("Hello", "World")).toBe("HelloWorld");
  });
});

describe("checkIfStringEmpty", () => {
  test("returns true if the string is empty", () => {
    expect(checkIfStringEmpty("")).toBe(true);
    expect(checkIfStringEmpty("Hello")).toBe(false);
  });
});

describe("capitalizeString", () => {
  test("capitalizes the first letter of the string", () => {
    expect(capitalizeString("hello")).toBe("Hello");
    expect(capitalizeString("world")).toBe("World");
  });
});

describe("checkIfTrue", () => {
  test("returns true if the booleanValue is true", () => {
    expect(checkIfTrue(true)).toBe(true);
    expect(checkIfTrue(false)).toBe(false);
    expect(checkIfTrue(1)).toBe(false);
    expect(checkIfTrue("true")).toBe(false);
  });
});

describe("checkIfTrueWithCustomResponse", () => {
  test("returns true if the booleanValue is true, otherwise returns a custom response", () => {
    expect(checkIfTrueWithCustomResponse(true)).toBe(true);
    expect(checkIfTrueWithCustomResponse(false)).toBe("This is false");
    expect(checkIfTrueWithCustomResponse(1)).toBe("This is false");
    expect(checkIfTrueWithCustomResponse("true")).toBe("This is false");
  });
});

describe("accessThirdElement", () => {
  test("returns the third element of the array", () => {
    expect(accessThirdElement([1, 2, 3, 4])).toBe(3);
  });
});

describe("findArrayLength", () => {
  test("finds the length of the array", () => {
    expect(findArrayLength([1, 2, 3])).toBe(3);
    expect(findArrayLength([])).toBe(0);
  });
});

describe("checkIfArrayEmpty", () => {
  test("returns true if the array is empty", () => {
    expect(checkIfArrayEmpty([])).toBe(true);
    expect(checkIfArrayEmpty([1, 2, 3])).toBe(false);
  });
});

describe("createObject", () => {
  test("creates an object with the given key and value", () => {
    expect(createObject("name", "John")).toEqual({ name: "John" });
  });
});

describe("findMaxNumber", () => {
  test("finds the maximum number in the array", () => {
    expect(findMaxNumber([1, 5, 3, 9])).toBe(9);
  });
});

describe("checkArrayForValue", () => {
  test("checks if the array contains the given value", () => {
    expect(checkArrayForValue([1, 2, 3], 2)).toBe(true);
    expect(checkArrayForValue([1, 2, 3], 4)).toBe(false);
  });
});

describe("doubleArrayValues", () => {
  test("doubles each value in the array", () => {
    expect(doubleArrayValues([1, 2, 3])).toEqual([2, 4, 6]);
    expect(doubleArrayValues([-1, 0, 1])).toEqual([-2, 0, 2]);
  });
});

describe("reverseString", () => {
  test("reverses the given string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

describe("addAllNumbers", () => {
  test("adds the sum of all numbers in the array", () => {
    expect(addAllNumbers([1, 2, 3])).toBe(6);
    expect(addAllNumbers([5, 10, 15])).toBe(30);
    expect(addAllNumbers([])).toBe(0);
  });
});
