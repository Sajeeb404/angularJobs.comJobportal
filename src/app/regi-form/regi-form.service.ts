import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInter, catagory } from './model';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegiFormService {

  private url ='http://localhost:3000/regiList';
  constructor(private httpService:HttpClient) { }

  getTasK(): Observable<UserInter[]>{
    const tasks = this.httpService.get<UserInter[]>(this.url)
    return tasks;
  }

  addTask(task: UserInter) {
    return this.httpService.post<UserInter>(this.url, task, httpOptions);
  }

  delete(task: UserInter): Observable<UserInter> {
    return this.httpService.delete<UserInter>(this.url + '/' + task.id);
  }

  updateReminder(task: UserInter) {
    return this.httpService.put<UserInter>(this.url + '/' + task.id, task, httpOptions);
  }

  getCat():Observable<catagory[]>{
    const tasks = this.httpService.get<catagory[]>('http://localhost:3000/catname')
    return tasks;
  }


}
