import Hash from "../.internal/Hash";

describe('setup', () => {

    const hash = new Hash<number>([]);
    hash.set("1",1);
    it("test", () => {
        expect(1).toBe(1);
        expect(hash.get("1")).toBe(1);

    })
});
