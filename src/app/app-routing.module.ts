import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyFormComponent} from './components/my-form/my-form.component';


const routes: Routes = [
  {path: 'home', component: MyFormComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
