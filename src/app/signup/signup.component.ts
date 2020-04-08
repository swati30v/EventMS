import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { MyService } from '../my.service';
import { Key } from 'protractor';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {
   submitted = false;
  // public dynamicArray: Array<any> = [];
  // public newAttribute: any = {};



  public userModel={Firstname:"",Lastname:"",Email:"", password:""};

     registerForm = new FormGroup({
  //     // Firstname : new FormControl('',[Validators.required]),
  //     // Lastname: new FormControl('',[Validators.required]),
  //     // Email : new FormControl('',[Validators.required]),
  //     // password : new FormControl('',[ Validators.required]),
      
   });


  constructor(private myservice:MyService) {
    
    this.registerForm = new FormGroup({
      Firstname: new FormControl(),
      Lastname: new FormControl(),
      Email: new FormControl(),
      password : new FormControl()
      
   });

   }

  ngOnInit(): void {
    // this.registerForm = this.formBuilder.group({
    //   email: [null, [Validators.required, Validators.email]],
    //   password: [null, Validators.required],
    // });
  }

  
  
  submit(){
    // // console.log(this.userModel,"okkkk")
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    this.myservice.signup(this.userModel)
    .subscribe(res=>{
      console.log(res,"whowwwwwwwwwwwwww")
  },
        err=>{
   console.log(err)
        })
      }
  }

