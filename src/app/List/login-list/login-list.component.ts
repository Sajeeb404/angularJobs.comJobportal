import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/login-form/model';
import { LoginFormService } from 'src/app/login-form/post.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {

  
  logList!:UserLogin[];

  constructor(private servise:LoginFormService){}
  
  ngOnInit(): void {
    this.servise.getTasK().subscribe((res)=>{
      this.logList = res;
    })
  }


  delete(task:UserLogin){
    this.servise.delete(task).subscribe((res)=>{
      this.ngOnInit();
    })
  }




}
