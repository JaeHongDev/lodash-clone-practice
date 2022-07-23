/** Used as references for various 'Number' constants. */
import isSymbol from "../src/isSymbol";


const INFINITY = 1 / 0;

/** Used to convert symbol to primitives and strings.  */
const symbolToString = Symbol.prototype.toString

/**
 *
 * The base implementation of toString which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function BaseToString(value: any) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value === 'string') {
        return value;
    }
    if (Array.isArray(value)) {
        //Recursively convert values (susceptible to call stack limit).
        return `${value.map(BaseToString)}`
    }

    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }

    const result = `${value}`;
    return (result === '0' && (1 / value) === -INFINITY) ? '-0' : result;
}

export default BaseToString;
