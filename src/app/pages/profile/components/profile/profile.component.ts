import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( public auth:AuthService) { }
  input:string = ''
  list:any = [];

  onSubmit(){
    this.list.push(this.input)
  }
   isauthenticate = this.auth.islogged

  state = ''

  ngOnInit(): void {
   this.isauthenticate.subscribe( m =>{
     console.log(m);
     if(m) this.state = 'user logged'
   })

  }

}
