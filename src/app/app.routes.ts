import { Routes } from '@angular/router';
import { Loginpage } from './public/pages/loginpage/loginpage';
import { PrivateTemplat } from './private/private-templat/private-templat';
import { Bookspage } from './private/bookspage/bookspage';
import { Memberspage } from './private/memberspage/memberspage';
import { Borowspage } from './private/borowspage/borowspage';
import { Reportspage } from './private/reportspage/reportspage';
import { Dashboardpage } from './private/dashboardpage/dashboardpage';

export const routes: Routes = [
    { path: 'login', component: Loginpage },
    {
        path: 'private', component: PrivateTemplat, children: [
            { path: 'books', component: Bookspage },
            { path: 'member', component: Memberspage },
            { path: 'borrow', component: Borowspage },
            { path: 'report', component: Reportspage },
            { path: 'dashboard', component: Dashboardpage },
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: '**', redirectTo: 'dashboard' }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
