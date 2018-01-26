import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";


/**
 * Static Mock User Data 
 */
@Injectable()
export class StaticUserDataSource{

    private users : User[] = [
        {
            id: 1,
            name: "Martha User1",
            age: 45,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "red", 
                food: "pizza"
                }	
        },
        {
            id: 2,
            name: "Frank User2",
            age: 26,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "red", 
                food: "steak"
                }	
        },
        {
            id: 3,
            name: "Bill User3",
            age: 25,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "blue", 
                food: "bananas"
                }	
        },
        {
            id: 4,
            name: "Catherine User4",
            age: 41,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "pink", 
                food: "steak"
                }	
        },
        {
            id: 5,
            name: "Brian User5",
            age: 20,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "blue", 
                food: "grapes"
                }	
        },
        {
            id: 6,
            name: "Nicole User6",
            age: 53,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "green", 
                food: "thai"
                }	
        },
        {
            id: 7,
            name: "Sam User7",
            age: 37,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "blue", 
                food: "bananas"
                }	
        },
        {
            id: 8,
            name: "Test User8",
            age: 36,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "black", 
                food: "salmon"
                }	
        },
        {
            id: 9,
            name: "Kate User9",
            age: 38,
            image: "http://via.placeholder.com/150x150?text=id",
            preferences: { 
                color: "red", 
                food: "cake"
                }	
        },
            {
            id: 10,
            name: "Test User10",
            preferences: { 
                color: "black", 
                food: "salmon"
                }	
            }
        ];

        // get users from data source
        getUsers() : Observable<User[]>{
            return Observable.from([this.users]);
        }

        //sort user by type
        sortUser( sortType : string){

            switch (sortType){
                case 'name': 
                    return this.users.sort((a,b)=>{
                        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
                        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                        }); 
                case 'age' :
                console.log('age');
                    return this.users.sort((a,b)=>{
                        if(a.age == null){
                            return 1;
                        }
                        return a.age - b.age;
                    });
                case 'preferences' :
                return this.users.sort((a,b)=>{
                    let preA = a.preferences.color.toUpperCase();
                    let preB = b.preferences.color.toUpperCase();
                    if (preA < preB) {
                        return -1;
                    }
                    if (preA > preB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                    }); 
                default:
                break;

            }
        }
        //search user by user input
        searchUser(userInput : string){
            return this.users.filter( user => 
                JSON.stringify(user).toUpperCase().indexOf(userInput.toUpperCase()) !== -1
            );
        }
}