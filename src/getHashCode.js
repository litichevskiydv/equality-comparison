function getHashCodeForIterables(operand, options) {
  let elementsHashCodes = Array.from(operand).map(x => getHashCode(x, options));
  if (options.ignoreCollectionOrder) elementsHashCodes = elementsHashCodes.sort((a, b) => a - b);

  return elementsHashCodes.reduce((accumulator, current) => (accumulator * 31) ^ current, 0);
}

function equalsForVariousObjects(operand, options) {
  if (operand["getHashCode"]) return operand.getHashCode();

  const customCalculator = options.customCalculators.get(Object.getPrototypeOf(operand));
  if (customCalculator) return customCalculator(operand);

  const constructorName = operand.constructor.name;
  return Object.keys(operand)
    .filter(key => options.membersToIgnore.has(`${constructorName}.${key}`) === false)
    .sort()
    .map(key => (getHashCode(key, options) * 31) ^ getHashCode(operand[key], options))
    .reduce(
      (accumulator, current) => (accumulator * 31) ^ current,
      options.ignoreObjectTypes ? 0 : getHashCode(operand.constructor.name, options)
    );
}

/**
 * Method calculates object hashcode.
 * @param {*} operand Any object.
 * @param {boolean} options.ignoreCollectionOrder If false hashcode calculation will be performed taking into account the order of the collections, if true, then collections with the same elements and different order will produce same hashcode.
 * @param {boolean} options.ignoreObjectTypes If false hashcode calculation will be performed taking into account objects prototypes, if true, then objects with the same members and different prototypes will produce same hashcode.
 * @param {Set} options.membersToIgnore Set with objects memebers, provided via format constructorName.memberName which must be ignored during the hashcode calculation.
 * @param {Map} options.customCalculators Map with custom functions for hashcode calculation (takes object as a parameter and returns hashcode) which are stored for objects prototypes.
 * @returns {number} Computed hashcode.
 */
function getHashCode(operand, options) {
  if (operand === null || operand === undefined) return 0;

  const opts = options || {};
  if (!opts.membersToIgnore) opts.membersToIgnore = new Set();
  if (!opts.customCalculators) opts.customCalculators = new Map();

  switch (typeof operand) {
    case "boolean":
      return operand ? 1 : 0;
    case "number":
      return operand;
    case "string":
      return getHashCodeForIterables(operand.split("").map(x => x.charCodeAt(0)), {});
    case "object":
      if (operand instanceof Date) return operand.getTime();
      if (operand[Symbol.iterator]) return getHashCodeForIterables(operand, opts);
      return equalsForVariousObjects(operand, opts);
    default:
      return 0;
  }
}

module.exports.getHashCode = getHashCode;
