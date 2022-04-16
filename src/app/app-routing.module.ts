import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CourseComponent } from './courses-lessons/course/course.component';
import { DashboardComponent } from './courses-lessons/dashboard/dashboard.component';
import { LessonComponent } from './courses-lessons/lesson/lesson.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';

const routes: Routes = [ 
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'course', component: CourseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lesson', component: LessonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }