import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";

import { ProfileComponent } from './components/profile/profile.component';
import {FormsModule} from "@angular/forms";



const routes: Routes = [
  {path: '', component: ProfileComponent}
]




@NgModule({
  declarations: [


    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProfileModule { }
