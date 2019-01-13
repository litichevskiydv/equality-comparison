const { equals } = require("./equals");
const { getHashCode } = require("./getHashCode");

module.exports.DefaultEqualityComparer = {
  /**
   * Method checks two objects equality.
   * @param {*} first First object.
   * @param {*} second Second object.
   * @returns {boolean} Comparison result.
   */
  equals: (firstOperand, secondOperand) => equals(firstOperand, secondOperand),
  /**
   * Method calculates object hashcode.
   * @param {*} operand Any object.
   * @returns {number} Computed hashcode.
   */
  getHashCode: operand => getHashCode(operand)
};
