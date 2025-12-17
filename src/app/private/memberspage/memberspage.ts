import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Memberservice } from './memberservice';
import { last } from 'rxjs';

@Component({
  selector: 'app-memberspage',
  imports: [FormsModule],
  templateUrl: './memberspage.html',
  styleUrl: './memberspage.scss',
})
export class Memberspage implements OnInit{
  M_Save() {
    this.memberservice.mAdd(this.ItemM);
    this.ItemM={id:0, fName:'', lName:'', phone:'', email:'',}
    this.M_DataRefresh();
    this.Mstat='mList';

  }

  ngOnInit(): void {
    this.M_DataRefresh()
  }

  Mstat:string='mList';

  Mdata: memberitem[] = [];

  ItemM: memberitem = {
    id: 0,
    fName: '',
    lName: '',
    phone: '',
    email: '',
  }

  memberservice=inject(Memberservice);
  M_DataRefresh() {
    this.Mdata = this.memberservice.mList();
  }

  M_add() {
    this.Mstat = "mAdd";
  }

  M_cancel() {
    this.Mstat = 'mList';
  }

}

export interface memberitem {
  id: number;
  fName: string;
  lName: string;
  phone?: string;
  email?: string;
}

