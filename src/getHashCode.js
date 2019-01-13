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
  return Object.entries(operand)
    .filter(x => options.membersToIgnore.has(`${constructorName}.${x[0]}`) === false)
    .sort((a, b) => a[0] - b[0])
    .map(x => (getHashCode(x[0], options) * 31) ^ getHashCode(x[1], options))
    .reduce(
      (accumulator, current) => (accumulator * 31) ^ current,
      options.ignoreObjectTypes ? 0 : getHashCode(operand.constructor.name, options)
    );
}

function getHashCode(operand, options) {
  const opts = options || {};
  if (!opts.membersToIgnore) opts.membersToIgnore = new Set();
  if (!opts.customCalculators) opts.customCalculators = new Map();

  if (operand === null || operand === undefined) return 0;

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
