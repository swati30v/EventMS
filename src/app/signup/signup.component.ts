import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,NgForm,FormArray} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {
   
  public userModel={Firstname:"",Lastname:"",Email:"", password:""};
  registerForm = new FormGroup({ });


  constructor(private router:Router) {
    
    this.registerForm = new FormGroup({
      Firstname: new FormControl(),
      Lastname: new FormControl(),
      Email: new FormControl(),
      password : new FormControl()
      
   });

   }

  ngOnInit(): void {
  }
  
  submit(){
    console.log(this.userModel);
    this.router.navigate(["login"])

    
  }

}
