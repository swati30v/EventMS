import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    EditProfileComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
