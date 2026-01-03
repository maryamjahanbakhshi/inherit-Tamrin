import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-crud',
  imports: [FormsModule],
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
  @Input() mystate: string = 'list';
  @Output() oncancel = new EventEmitter();
  @Output() onadd = new EventEmitter;
  @Input() column: colum[] = [];
  @Input() mydata: any[] = [];
  @Output() onedit = new EventEmitter<any>;
  @Output() onremove=new EventEmitter<any>;
  @Output() onsave=new EventEmitter;
}

export interface colum {
  title: string;
  filde: string;
}