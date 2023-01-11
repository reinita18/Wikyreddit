import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePostComponent } from './create-post/create-post.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { SearchedPostComponent } from './searched-post/searched-post.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {path:"",component: HomepageComponent},
  {path:"mainpage",component: MainPageComponent},
  {path:"register",component: RegisterComponent},
  {path:"login",component: LoginComponent},
  {path:"profile",component: ProfileComponent},
  {path:"createpost",component: CreatePostComponent},
  {path:"viewpost",component: ViewPostComponent},
  {path:"createcomment",component: CreateCommentComponent},
  {path:"searchedpost",component: SearchedPostComponent},
  {path: "category", component: CategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
