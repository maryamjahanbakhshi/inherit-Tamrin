import { Component, inject, OnInit } from '@angular/core';
import { Bookservice } from './bookservice';
import { FormsModule } from '@angular/forms';
import { thing } from '../../+security/+base/base-thing';
import { BaseCrudPage } from '../../+security/+base/base-crud';
import { BaseService } from '../../+security/+base/base-Service';
import { Title } from '@angular/platform-browser';
import { BaseCrudComponent, colum } from "../../+security/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-bookspage',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './bookspage.html',
  styleUrl: './bookspage.scss',
})
export class Bookspage extends BaseCrudPage<BookItem> implements OnInit {
  ngOnInit(): void {
    this.DataRefresh();
     this.Item = {
      id: 0,
      titel: '',
      auther: '',
      publisher: '',
      price: 0
    }
  }
  override entitiesservice = inject(Bookservice)
  override addperipair(): void {
    this.Item = {
      id: 0,
      titel: '',
      auther: '',
      publisher: '',
      price: 0
    }
  }
  BooksCoulmn: colum[] = [
    { filde: 'id', title: 'شناسه' },
    { filde: 'title', title: 'عنوان' },
    { filde: 'auther', title: 'نویسنده' },
    { filde: 'publisher', title: 'ناشر' },
    { filde: 'price', title: 'قیمت' }
  ]
}

export interface BookItem extends thing {
  titel: string;
  auther: string;
  publisher: string;
  price: number;
}
