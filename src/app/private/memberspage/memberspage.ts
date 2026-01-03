import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Memberservice } from './memberservice';
import { last } from 'rxjs';
import { thing } from '../../+security/+base/base-thing';
import { BaseCrudPage } from '../../+security/+base/base-crud';
import { BaseService } from '../../+security/+base/base-Service';
import { BaseCrudComponent, colum } from "../../+security/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-memberspage',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './memberspage.html',
  styleUrl: './memberspage.scss',
})

export class Memberspage extends BaseCrudPage<memberitem> implements OnInit {
  ngOnInit(): void {
    this.DataRefresh();
     this.Item = {
      id: 0,
      fName: '',
      lName: '',
      email: '',
      phone: ''
    }
  }
  override entitiesservice = inject(Memberservice)
  override addperipair(): void {
    this.Item = {
      id: 0,
      fName: '',
      lName: '',
      email: '',
      phone: ''
    }
  }
  memberCoulmn: colum[] = [
    { filde: 'id', title: 'شناسه' },
    { filde: 'fName', title: 'نام' },
    { filde: 'lName', title: 'نام خانوادگی ' },
    { filde: 'email', title: 'ایمیل' },
    { filde: 'phone', title: 'تلفن همراه' }
  ]

}

export interface memberitem extends thing {
  fName: string;
  lName: string;
  phone?: string;
  email?: string;
}

