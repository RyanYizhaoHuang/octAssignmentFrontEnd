import { Component } from '@angular/core';
import { User } from './model/user.model';
import { StaticUserDataSource } from './model/static.datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : User[];
  selectedUser : User = null;

  constructor(private dataSource : StaticUserDataSource){
    dataSource.getUsers().subscribe((
      data =>{ this.users = data}
    ));
  }

  clearUser(){
    this.selectedUser = null; 
  }

  /**
   * Choose user from user list
   * @param user 
   */
  chooseUser(user : User){
    console.log(user);
    this.selectedUser = user;
  }
}
