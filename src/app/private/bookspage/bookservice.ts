import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BookItem } from './bookspage';
import { BaseService } from '../../+security/+base/base-Service';

@Injectable({
  providedIn: 'root',
})
export class Bookservice extends BaseService<BookItem> {
  override data: BookItem[] = [
    { id: 1, titel: 'پدرپولدار', auther: 'کیوساکی', publisher: 'امینی', price: 200000 },
    { id: 2, titel: 'جرات داشته باش', auther: 'سهی', publisher: 'درسا', price: 250000 }
  ]
  override Update(destination: BookItem, source: BookItem): void {
    destination.id = source.id;
    destination.titel = source.titel;
    destination.auther = source.auther;
    destination.publisher = source.publisher;
    destination.price = source.price;
  }
}
