const mathOperations = require('./JestExample');

//example of using Matchers

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      // arrange and act
      var result = mathOperations.sum(1,2)
      // assert
      expect(result).toBe(3);
    });

    //fail example
    test('adding 1 + 2 should return 10', () => {
        var result = mathOperations.sum(1,2)
        expect(result).toBe(10);
      });
})