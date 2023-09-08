import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'createUser', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
