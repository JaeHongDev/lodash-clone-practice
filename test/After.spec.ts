import Times from "../src/times";
import After from "../src/after";

describe('after', () => {
    function testAfter(n, times) {
        let count = 0;
        Times(times, After(n, function () {
            count++;
        }));
        return count;
    }

    it('should create a function that invokes func after n calls',function(){
        expect(testAfter(5,5)).toBe(1)
        expect(testAfter(5,4)).toBe(0);

    })
});
