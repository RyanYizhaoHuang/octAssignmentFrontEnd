import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StaticUserDataSource } from './model/static.datasource';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StaticUserDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
