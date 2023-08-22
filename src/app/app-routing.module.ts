import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/aut/login/login.component';
import {HomeComponent} from './Component/home/home.component';
import {MenuComponent} from './Component/aut/menu/menu.component';
import {AuthGuard} from './guards/auth.guard';
import {RegisterComponent} from './Component/aut/register/register.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent, canActivate: [ AuthGuard ] },
  {path: 'menu', component:MenuComponent},
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  {path:'register',component:RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutingModule { }
