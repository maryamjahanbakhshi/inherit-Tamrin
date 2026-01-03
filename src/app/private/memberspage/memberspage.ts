import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Memberservice } from './memberservice';
import { last } from 'rxjs';
import { thing } from '../../+security/+base/base-thing';
import { BaseCrudPage } from '../../+security/+base/base-crud';
import { BaseService } from '../../+security/+base/base-Service';

@Component({
  selector: 'app-memberspage',
  imports: [FormsModule],
  templateUrl: './memberspage.html',
  styleUrl: './memberspage.scss',
})

export class Memberspage extends BaseCrudPage<memberitem> implements OnInit {
  ngOnInit(): void {
    this.DataRefresh();
  }
  override entitiesservice = inject(Memberservice)
  override addperipair(): void {
    this.Item={
      id:0,
      fName:'',
      lName:'',
      email:'',
      phone:''
    }
  }
}

export interface memberitem extends thing {
  fName: string;
  lName: string;
  phone?: string;
  email?: string;
}

