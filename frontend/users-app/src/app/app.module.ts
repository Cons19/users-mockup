import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from "./services/user.service";
import { usersReducer } from './state/users.reducer';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    ScrollingModule,
    FormsModule,
    StoreModule.forRoot({ users: usersReducer }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
