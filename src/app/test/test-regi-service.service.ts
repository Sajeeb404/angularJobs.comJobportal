import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegiTestModel } from './testmodel';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TestRegiServiceService {

  private url ='http://localhost:8080/api';
  constructor(private httpService:HttpClient) { }

  getTasK(): Observable<UserRegiTestModel[]>{
    const tasks = this.httpService.get<UserRegiTestModel[]>(this.url+'/regi')
    return tasks;
  }

  addTask(task: UserRegiTestModel) {
    return this.httpService.post<UserRegiTestModel>(this.url +'/regi/save', task, httpOptions);
  }
  
  
  delete(task: UserRegiTestModel): Observable<UserRegiTestModel> {
    return this.httpService.delete<UserRegiTestModel>(this.url + '/regi/delete/' + task.id);
  }

  updateReminder(task: UserRegiTestModel) {
    return this.httpService.put<UserRegiTestModel>(this.url + '/regi/update/' + task.id, task, httpOptions);
  }
  



}
