import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { NewRegComponent } from './components/new-reg/new-reg.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

const routes: Routes = [{
  path:"",
  component:HomePageComponent
},{
  path:"view",
  component:ViewDetailsComponent
},
{
  path:"registration",
  component:NewRegComponent
},
{
  path:"login",
  component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
