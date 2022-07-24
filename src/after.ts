/**
 * The oppoiste of 'before' . this method creates a function that invokes
 * 'func' once it's called 'n' or more times'
 * @param {number} n The number of calls before func is invoked.
 * @param {Function}  func The function to restrict
 * @returns {Function} Returns the new restricted function.
 * */


function after(n, func) {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    n = n || 0;
    return function (...args) {
        if (--n < 1) {
            return func.apply(this, args);
        }
    }
}

export default after;

