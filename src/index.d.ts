export function equals(
  first: any,
  second: any,
  options?: {
    ignoreCollectionOrder?: true;
    ignoreObjectTypes?: true;
    membersToIgnore?: Set<string>;
    customComparers?: Map<any, (first: any, second: any) => boolean>;
  }
): boolean;

export function getHashCode(
  operand: any,
  options?: {
    ignoreCollectionOrder?: true;
    ignoreObjectTypes?: true;
    membersToIgnore?: Set<string>;
    customCalculators: Map<any, (operand: any) => null>;
  }
): number;

export const DefaultEqualityComparer: {
  equals: (first: any, second: any) => boolean;
  getHashCode: (operand: any) => number;
};
