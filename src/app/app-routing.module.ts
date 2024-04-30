import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';

//-------------------hedi---------------------------------------
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navcon', component: NavbarconnectedComponent },
  { path: 'forget', component: ForgotPwdComponent },
  { path: 'suide', component: SidemenuComponent },

  // ------------------------------------------paths hedi-------------------------------------
  { path: 'listblog', component: ListBlogComponent },
  { path: 'blogdetails/:id', component: BlogDetailsComponent },
  { path: 'addblog', component: AddBlogComponent },
  { path: 'updateBlog/:id', component: UpdateBlogComponent },
  { path: 'listBlogback', component: ListBlogbackComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
