import { Expansion } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { memberitem } from './memberspage';

@Injectable({
  providedIn: 'root',
})
export class Memberservice {
  private mData: memberitem[] = [
    { id: 1, fName: 'مریم ', lName: 'جهان بخشی', phone: '09034783924', email: 'MaryamJahanBakhshi@gmail.com' },
    { id: 2, fName: 'زهرا ', lName: 'نادری', phone: '09054783824', email: '' }
  ]

  mList() {
    return [...this.mData];
  }

  mAdd(mitem: memberitem) {
    this.mData.push(mitem);
  }
}

