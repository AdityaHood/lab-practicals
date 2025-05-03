// Removed duplicate import
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',  
        component: LoginComponent
    },
    {
        path: 'show',
        component: ShowComponent
    },{
        path:'',
        component:HomeComponent
    }
    
];
