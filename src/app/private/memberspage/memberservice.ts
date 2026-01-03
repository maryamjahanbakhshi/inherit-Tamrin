import { Expansion } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { memberitem } from './memberspage';
import { BaseService } from '../../+security/+base/base-Service';

@Injectable({
  providedIn: 'root',
})
export class Memberservice extends BaseService<memberitem> {
  override data: memberitem[] = [
    { id: 1, fName: 'مریم ', lName: 'جهان بخشی', phone: '09034783924', email: 'MaryamJahanBakhshi@gmail.com' },
    { id: 2, fName: 'زهرا ', lName: 'نادری', phone: '09054783824', email: '' }
  ]
  override Update(destination: memberitem, source: memberitem): void {
    destination.id=source.id;
    destination.fName=source.fName;
    destination.lName=source.lName;
    destination.email=source.email;
    destination.phone=source.phone;
  }
}

