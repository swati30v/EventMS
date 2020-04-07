import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,NgForm,FormArray} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {
   
  public userModel={Firstname:"swati",Lastname:"verma",Email:"swati@gmail.com",password:"123"};
  registerForm = new FormGroup({ });


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate([""])
  }
  
  submit(){
    console.log(this.userModel);

    
  }

}
