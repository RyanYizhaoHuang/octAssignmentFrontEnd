import { Component } from "@angular/core";
import { StaticUserDataSource } from "../model/static.datasource";
import { User } from "../model/user.model";
import { Router } from "@angular/router";

@Component({
    templateUrl:'./user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
    users : User[];
    selectedUser : User = null;

    constructor(private dataSource : StaticUserDataSource,
                private router : Router){
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

      /**
       * Go to selected user detail page
       * @param selectedUser 
       */
      goToDetail(selectedUser : User){
        this.router.navigate(['/userdetail'],{queryParams:{'user':JSON.stringify(selectedUser)}});
      }

      /**
       * Sort user according to user select type
       * @param event 
       */
      onSortUser(event){
          const sortType = event.target.value;
          if(sortType === 'Sort By...'){
            return false;
          }
          this.users = this.dataSource.sortUser(sortType);
      }
      /**
       * 
       * @param userInput search user according to user input
       */
      onSearchUser(userInput : string){
        this.users = this.dataSource.searchUser(userInput);
      }

      
      
}