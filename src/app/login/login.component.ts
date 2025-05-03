import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }
  onLogin(event:any)
  {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("email in login",email);

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const found = users.find((user:any)=>user.email === email && user.password === password);
    if(found){
      this.router.navigate(['/show']);
    }else{
      alert('Invalid email or password');

    }
  }
}
