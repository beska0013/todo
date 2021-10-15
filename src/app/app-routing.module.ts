import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: ()=> import ('./pages/form/form.module').then( m => m.FormModule)
  },
  {
    path: 'profile',
    loadChildren: ()=> import ('./pages/profile/profile.module').then( m => m.ProfileModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
