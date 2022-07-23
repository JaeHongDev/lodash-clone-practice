const HASH_UNDEFINED = '__lodash_hash_undefined__'

export default class Hash<T> {
    private data: Object
    private size: number;
    constructor(entries: Array<T>) {
        let index = -1;
        const length = entries == null ? 0 : entries.length;

        this.clear();
        while (++index < length) {
            const entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    clear() {
        this.data = Object.create(null);
        this.size = 0;
    }
    public delete(key: string) {
        const result = this.has(key) && delete this.data[key];
        this.size -= result ? 1 : 0;
        return result;
    }
    public has = (key: string): Boolean => this.data[key] !== undefined;
    public get(key:string) {
        const data = this.data;
        const result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    public set(key: string, value: T) {
        const data = this.data;
        this.size += this.has(key) ? 0 : 1;
        data[key] = value === undefined ? HashChangeEvent : value
        return this;
    }
}
