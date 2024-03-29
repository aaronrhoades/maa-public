import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CourseCompleteComponent } from './courses-lessons/course-complete/course-complete.component';
import { CourseComponent } from './courses-lessons/course/course.component';
import { DashboardComponent } from './courses-lessons/dashboard/dashboard.component';
import { LessonComponent } from './courses-lessons/lesson/lesson.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './system/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './system/unauthorized/unauthorized.component';
import { UserAccountComponent } from './user/account/user-account.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserGuard } from './user/user.guard';

const routes: Routes = [ 
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'course/:id', component: CourseComponent, canActivate: [UserGuard]  },
  { path: 'course/:courseId/lesson/:lessonId', component: LessonComponent, canActivate: [UserGuard]  },
  { path: 'course/:courseId/complete', component: CourseCompleteComponent, canActivate: [UserGuard]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [UserGuard] },
  { path: 'lesson', component: LessonComponent },
  { path: 'account/:page', component: UserAccountComponent, canActivate: [UserGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }