import * as assert from "assert";
import isSymbol from "../src/isSymbol";


describe('isSymobject', () => {

    it("should return 'false' for non-symbols",function(){
        assert.strictEqual(isSymbol([1, 2, 3]), false);
        assert.strictEqual(isSymbol(true), false);
        assert.strictEqual(isSymbol(new Date), false);
        assert.strictEqual(isSymbol(new Error), false);
        assert.strictEqual(isSymbol({ '0': 1, 'length': 1 }), false);
        assert.strictEqual(isSymbol(1), false);
        assert.strictEqual(isSymbol(/x/), false);
        assert.strictEqual(isSymbol('a'), false);
    })
})
