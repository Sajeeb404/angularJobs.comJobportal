import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddJobs } from './AddJobsModel';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://localhost:3000/JobList';
  
  constructor(private httpService: HttpClient) { }

  getTasK(): Observable<AddJobs[]> {
    const tasks = this.httpService.get<AddJobs[]>(this.url)
    return tasks;
  }

  addTask(task: AddJobs) {
    return this.httpService.post<AddJobs>(this.url, task, httpOptions);
  }

  delete(task: AddJobs): Observable<AddJobs> {
    return this.httpService.delete<AddJobs>(this.url + '/' + task.id);
  }

  updateReminder(id: number, task: AddJobs) {
    return this.httpService.put<AddJobs>(this.url + '/' + id, task, httpOptions);
  }


  find(id: number): Observable<any> {
    return this.httpService.get(this.url + '/' + id)
  }



}
