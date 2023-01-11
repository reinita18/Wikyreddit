import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//Componentes
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { CommentComponent } from './comment/comment.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderMainPageComponent } from './header-main-page/header-main-page.component';
import { FooterComponent } from './footer/footer.component';
import {PostsService} from "./services/posts.service";
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { SearchedPostComponent } from './searched-post/searched-post.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    PostComponent,
    ProfileComponent,
    RegisterComponent,
    ViewPostComponent,
    CommentComponent,
    MainPageComponent,
    HeaderMainPageComponent,
    FooterComponent,
    CreateCommentComponent,
    SearchedPostComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    {provide:LocationStrategy,useClass:HashLocationStrategy},
    PostsService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
