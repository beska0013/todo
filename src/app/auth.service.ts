import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged = false


   islogged  = new Observable((observer)=>{

     observer.next(this.userLogged)
   })



  constructor(private router: Router) { }






}
