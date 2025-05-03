import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-show',
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent  implements AfterViewInit{
  ngAfterViewInit(): void {
    const storedData = localStorage.getItem('users');
    let users = storedData ? JSON.parse(storedData) : [];

    const ol = document.getElementById('studentList');
    users.forEach((user:any)=>{
      const li = document.createElement('li');
      li.textContent = `Name: ${user.name}, Mobile: ${user.mobile}, Email: ${user.email}`;
      ol?.appendChild(li);
    })
  }
  

}
