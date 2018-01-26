import { Component,OnInit, OnDestroy } from "@angular/core";
import { User } from "../model/user.model";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
    templateUrl : "./user-detail.component.html",
    styleUrls :['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit,OnDestroy{
    
    user : User;
    paramsSubscription: Subscription;

    constructor(private route : ActivatedRoute){
    }
    //Fetch selected user data
    ngOnInit(){
        this.paramsSubscription = this.route.queryParams.subscribe(params => {
            this.user = JSON.parse(params['user']) as User;
            console.log(this.user);
        });
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }
}