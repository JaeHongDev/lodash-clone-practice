import add from "./add";


describe('add',function(){
    it("should add two numbers",function(){
        expect(add(6,4)).toBe(10);
        expect(add(-6,4)).toBe(-2);
        expect(add(-6,-4)).toBe(-10);
    });

    it('should not coerce arguments to numbers',function(){
        expect(add('6','4')).toBe('64');
        expect(add('x','y')).toBe('xy');
    })
})
