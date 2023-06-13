import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplyForm } from './jobsApplyFormModel';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class JobsApplyService {

  private url = 'http://localhost:3000/AppliedList';
  constructor(private httpService: HttpClient) { }

  getTasK(): Observable<JobApplyForm[]> {
    const tasks = this.httpService.get<JobApplyForm[]>(this.url)
    return tasks;
  }

  addTask(task: JobApplyForm) {
    return this.httpService.post<JobApplyForm>(this.url, task, httpOptions);
  }

  delete(task: JobApplyForm): Observable<JobApplyForm> {
    return this.httpService.delete<JobApplyForm>(this.url + '/' + task.id);
  }

  updateReminder(id: number, task: JobApplyForm) {
    return this.httpService.put<JobApplyForm>(this.url + '/' + id, task, httpOptions);
  }
  find(id: number): Observable<any> {

    return this.httpService.get(this.url + '/' + id)

  }
}
