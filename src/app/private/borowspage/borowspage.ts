import { Component, inject, OnInit } from '@angular/core';
import { thing } from '../../+security/+base/base-thing';
import { FormsModule } from '@angular/forms';
import { BaseCrudComponent, colum } from "../../+security/+base/base-crud-component/base-crud-component";
import { BaseCrudPage } from '../../+security/+base/base-crud';
import { BaseService } from '../../+security/+base/base-Service';
import { BorowsService } from './borows-service';

@Component({
  selector: 'app-borowspage',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './borowspage.html',
  styleUrl: './borowspage.scss',
})
export class Borowspage extends BaseCrudPage<BorowsItem> implements OnInit {
  ngOnInit(): void {
    this.DataRefresh();
    this.Item={
      id:0,
      titel:'',
      fullName:'',
      Dateborows:'',
      reternDate:''
    }
  }
  override entitiesservice=inject(BorowsService)
  override addperipair(): void {
    this.Item={
      id:0,
      titel:'',
      fullName:'',
      Dateborows:'',
      reternDate:''
    }
  }

  borowscolumn: colum[] = [
    { filde: 'id', title: 'شناسه' },
    { filde: 'titel', title: 'عنوان' },
    { filde: 'fullName', title: 'نام و نام خانوادگی' },
    { filde: 'Dateborows', title: 'تاریخ امانت' },
    { filde: 'reternDate', title: 'موعدبازگشت' }
  ]
}

export interface BorowsItem extends thing {
  titel: string;
  fullName: string;
  Dateborows: string;
  reternDate: string;
}
