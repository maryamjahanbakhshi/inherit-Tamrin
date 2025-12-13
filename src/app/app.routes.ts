import { Routes } from '@angular/router';
import { Loginpage } from './public/pages/loginpage/loginpage';
import { PrivateTemplat } from './private/private-templat/private-templat';

export const routes: Routes = [
    { path: 'login', component: Loginpage },
    {
        path: 'private', component: PrivateTemplat, children: [

        ]
    },
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];
