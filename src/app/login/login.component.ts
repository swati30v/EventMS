import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator,NgForm,FormArray, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  public userModel={Email:"",password:""};
  myGroup= new FormGroup({ 
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[ Validators.required]),
  });

  constructor(private router:Router) { 

    this.myGroup= new FormGroup({
      
      Email: new FormControl(),
      password : new FormControl()
      
   });
  }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.userModel);
    this.router.navigate(["profile"])

    
  }

}
