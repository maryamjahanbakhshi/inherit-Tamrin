import { Component, inject, OnInit } from '@angular/core';
import { Bookservice } from './bookservice';
import { FormsModule } from '@angular/forms';
import { thing } from '../../+security/+base/base-thing';
import { BaseCrudPage } from '../../+security/+base/base-crud';
import { BaseService } from '../../+security/+base/base-Service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bookspage',
  imports: [FormsModule],
  templateUrl: './bookspage.html',
  styleUrl: './bookspage.scss',
})
export class Bookspage extends BaseCrudPage<BookItem> implements OnInit {
  ngOnInit(): void {
    this.DataRefresh()
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
}

export interface BookItem extends thing {
  titel: string;
  auther: string;
  publisher: string;
  price: number;
}
