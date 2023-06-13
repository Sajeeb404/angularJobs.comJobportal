import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './model';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

 
  // private url = 'http://localhost:8080/api';
  // constructor(private httpService: HttpClient) { }

  // getTasK(): Observable<UserLogin[]> {
  //   const tasks = this.httpService.get<UserLogin[]>(this.url+'login')
  //   return tasks;
  // }

  // addTask(task: UserLogin) {
  //   return this.httpService.post<UserLogin>(this.url +'/login/'+ task, httpOptions);
  // }

  // delete(task: UserLogin): Observable<UserLogin> {
  //   return this.httpService.delete<UserLogin>(this.url + '/login/delete/' + task.id);
  // }

  // updateReminder(id:number, task: UserLogin) {
  //   return this.httpService.put<UserLogin>(this.url + '/login/update/' + id, task, httpOptions);
  // }


  // find(id: number): Observable<any> {
  //   return this.httpService.get(this.url + '/login/' + id)
  // }


  private url ='http://localhost:3000/loginList';
  constructor(private httpService:HttpClient) { }

  getTasK(): Observable<UserLogin[]>{
    const tasks = this.httpService.get<UserLogin[]>(this.url)
    return tasks;
  }

  addTask(task: UserLogin) {
    return this.httpService.post<UserLogin>(this.url, task, httpOptions);
  }

  delete(task: UserLogin): Observable<UserLogin> {
    return this.httpService.delete<UserLogin>(this.url + '/' + task.id);
  }


   updateReminder(id:number, task: UserLogin) {
    return this.httpService.put<UserLogin>(this.url + '/' + id, task, httpOptions);
  }

  find(id: number): Observable<any> {
    return this.httpService.get(this.url + '/' + id)
  }



}