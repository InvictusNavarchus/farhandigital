import kebabcase from "lodash.kebabcase";

/**
 * Convert a string to kebab-case for use in URLs
 */
export const slugifyStr = (str: string) => kebabcase(str);

/**
 * Convert an array of strings to kebab-case
 */
export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
