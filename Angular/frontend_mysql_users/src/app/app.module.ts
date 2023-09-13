import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    UserComponent,
    FooterComponent,
    CreateUserComponent,
    UpdateUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
