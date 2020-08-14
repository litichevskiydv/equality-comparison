const { equals } = require("../src");

describe("Should test equals", () => {
  test.each(require("./testsData").equalsAllCases)("%s", (testCase) => {
    // When
    const actual = equals(testCase.first, testCase.second, testCase.options);

    // Then
    expect(actual).toBe(testCase.expected);
  });
});
