import isSymbol from "../src/isSymbol";

const NAN = 0 / 0;
/**
 * The base implementation of 'toNumber' which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal stnring values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */

function BaseToNumber(value):Number{
    if(typeof value === 'number'){
        return value;
    }

    if(isSymbol(value)){
        return NAN;
    }

    return +value; // conversion type number;
}
export default BaseToNumber;
