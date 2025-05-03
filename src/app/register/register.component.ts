import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router:Router){

  }
  onSubmit(event: any){
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = {name,mobile,email,password};
    
    const storedData = localStorage.getItem('users');
    let users = storedData ? JSON.parse(storedData) : [];

    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    form.reset();
    this.router.navigate(['/login']);


    

  }
}
