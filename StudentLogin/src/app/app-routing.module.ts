import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { ListComponent } from './list/list.component';
import { HomPageComponent } from './hom-page/hom-page.component';


const routes: Routes = [
  {path:'', component:HomPageComponent},
  {path:'home',component:HomPageComponent},
  {path:'form',component:StudentFormComponent},
  {path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
