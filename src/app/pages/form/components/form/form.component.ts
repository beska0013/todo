import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  constructor(
    public router: Router,
    public auth:AuthService
  ) { }

  form = new FormGroup({
    userName: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required),
  })

   user: any={
    name: 'user',
    pass: 'pass',
    islogged:false
   }





  submitForm() {
    if(this.form.value.userName.toLowerCase() === this.user.name.toLowerCase() && this.form.value.pass === this.user.pass){
      this.router.navigate(['profile'])
      this.auth.userLogged = !this.user.isLogged
    }




     }





  ngOnInit(): void {

  }

}
