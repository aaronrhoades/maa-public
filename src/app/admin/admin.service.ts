import { Injectable } from '@angular/core';
import { Course, Lesson } from '../shared/models/course/course';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  environment = environment;

  constructor(private http: HttpClient) { }
  
  saveCourse$(course: Course) : Observable<any>{
    return this.http.post(this.environment.api + '/courses', course);
  }

  updateCourse$(_id:string, course: Course) : Observable<any>{
    return this.http.put(this.environment.api + '/courses/' + _id, course);
  }

  saveLesson$(lesson: Lesson) : Observable<any>{
    return this.http.post(this.environment.api + '/lessons', lesson);
  }

  updateLesson$(_id:string, lesson: Lesson) : Observable<any>{
    return this.http.put(this.environment.api + '/lessons/' + _id, lesson);
  }
}
