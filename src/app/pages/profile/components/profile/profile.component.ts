import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  input:string = ''
  list:any = [];
  onSubmit(){

    this.list.push(this.input)

  }
  ngOnInit(): void {



  }

}
