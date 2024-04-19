import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';
//-------------------hedi---------------------------------------
import { AddBlogComponent } from './Blog/add-blog/add-blog.component'
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';



const routes: Routes = [
  { path :'',redirectTo:'home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  { path :'login', component: LoginComponent},




  // ------------------------------------------paths hedi-------------------------------------
  { path :'blog', component: AddBlogComponent},
  { path :'blogdetails/:id', component: BlogDetailsComponent},
  { path :'updateBlog/:id', component: AddBlogComponent},
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
