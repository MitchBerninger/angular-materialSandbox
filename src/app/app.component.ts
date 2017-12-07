import { Component, OnInit } from '@angular/core';
import { User } from './userAccounts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Material Sandbox';
  // x = 0;
  users = [
    new User(1, 'Mitch Berninger', 'mitchell.berninger@gmail.com', './assets/img/Summer15Square.jpg'),
    new User(2, 'John Doe', 'abc@xyz.com', './assets/img/ic_account_circle_black_24dp_2x.png')
  ];

    // function switchUsers() {
    //   x += 1;
    //   if (x > users.length - 1) {
    //     x = 0;
    //   }
    // }

  currentUser = this.users[0];


  ngOnInit() {

  }

}
