import { thing } from "./base-thing";

export class BaseService<T extends thing> {
    protected data: T[] = []
    list() {
        return [...this.data];
    }
    Add(item: T) {
        this.data.push(item);
    }
    Edit(item: T) {
        const ind = this.data.findIndex(b => b.id = item.id)
        if (ind != -1) {
            this.Update(this.data[ind], item)
        }
    }
    Remove(item: T) {
        this.data = this.data.filter(b => b.id != item.id)
    }
    Update(destination: T, source: T) {

    }
}