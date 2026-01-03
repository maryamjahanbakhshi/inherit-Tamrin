import { inject } from "@angular/core";
import { thing } from "./base-thing";
import { BaseService } from "./base-Service";

export class BaseCrudPage<T extends thing> {
    Save() {
        if (this.state == 'Add') {
            this.entitiesservice.Add(this.Item);
        }
        else if (this.state == 'Remove') {
            this.entitiesservice.Remove(this.Item);
        }
        else if (this.state == 'Edit') {
            this.entitiesservice.Edit(this.Item);
        }
        this.DataRefresh();
        this.state = 'list';
    }
    state: string = 'list';
    data: T[] = [];
    Item!: T;
    entitiesservice!: BaseService<T>;
    DataRefresh() {
        this.data = this.entitiesservice.list();
    }
    add() {
        this.state = "Add";
    }
    addperipair() {
    }
    edit(book: T) {
        this.Item = { ...book };
        this.state = 'Edit';
    }
    cancel() {
        this.state = 'list';
    }
    remove(book: T) {
        this.Item = { ...book };
        this.state = 'Remove';
    }
}

