const { equals } = require("./equals");
const { getHashCode } = require("./getHashCode");

module.exports.DefaultEqualityComparer = {
  equals: (firstOperand, secondOperand) => equals(firstOperand, secondOperand),
  getHashCode: operand => getHashCode(operand)
};
