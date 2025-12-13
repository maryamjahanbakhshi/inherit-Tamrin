import { IfStmt } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage {
  message: string = '';
  router = inject(Router)
  loginForm: LoginForm = {
    userName: '',
    password: '',
    keepMe: false
  };
  test() {
    if (this.loginForm.userName == 'maryam' && this.loginForm.password == '1382') {
      sessionStorage.setItem('tokenU1','marmlknlkdmlmxndckcmc')
      if(this.loginForm.keepMe==true){
        localStorage.setItem('tokenU1','marmlknlkdmlmxndckcmc')
      }
      this.router.navigateByUrl('private')
    } else {
      this.message = 'نام کاربری یا کلمه عبور اشتباه است ';
    }
  }
}

interface LoginForm {
  userName: string;
  password: string;
  keepMe: boolean;
}
