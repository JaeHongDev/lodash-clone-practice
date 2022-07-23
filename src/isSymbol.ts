/**
 *
 * Checks if 'value' is classifed as Symbol primitive or object;
 * @param {*} value The value to check.
 * @returns {boolean} Returns 'true' if 'value' is a symbol else false
 */
import GetTag from "../.internal/GetTag";


function IsSymbol(value: any){
    const type = typeof value;
    return type == 'symbol'  || (type === 'object' && value != null && GetTag(value) == '[object Symbol]')
}

export default IsSymbol;

