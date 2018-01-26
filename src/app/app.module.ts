import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { StaticUserDataSource } from './model/static.datasource';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"users", component:UserListComponent},
      {path:"userdetail", component:UserDetailComponent},      
      {path: "**", redirectTo:"/users"}
    ])
  ],
  providers: [StaticUserDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
