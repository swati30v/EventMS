import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator,NgForm,FormArray, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MyService } from '../my.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  submitted = false;
  public userModel={Email:"",password:""};

  myGroup= new FormGroup({ 
    // email : new FormControl('',[Validators.required]),
    // password : new FormControl('',[ Validators.required]),
  });

  constructor(private myservice:MyService) { 

    this.myGroup= new FormGroup({
      
      Email: new FormControl(),
      password : new FormControl()
      
   });
  }

  ngOnInit(): void {
  }

  

  submit(){
    this.submitted = true;
    if(this.myGroup.invalid){
      return;
    }
    this.myservice.login(this.userModel)
    .subscribe(res=>{
      console.log(res,"whowwwwwwwwwwwwww")
  },
        err=>{
   console.log(err)
        })
      }
}
