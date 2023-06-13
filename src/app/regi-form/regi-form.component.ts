import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInter } from './model';
import { RegiFormService } from './regi-form.service';

@Component({
  selector: 'app-regi-form',
  templateUrl: './regi-form.component.html',
  styleUrls: ['./regi-form.component.css']
})
export class RegiFormComponent {

  userList!:UserInter[];

  forms!:FormGroup;

  constructor(private servise:RegiFormService){}

  ngOnInit(){
    this.servise.getTasK().subscribe((userLists:UserInter[])=>{
      this.userList = userLists;
    });

    this.forms = new FormGroup({
      id: new FormControl(),
      fullname: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      mcode: new FormControl(),
      password: new FormControl(),
      confirmpassword: new FormControl(),
      userType: new FormControl(),
    })

  }
    submit(){
      if (this.forms.value.id === null) {
        this.servise.addTask(this.forms.value).subscribe((res) => {
          this.ngOnInit();
        });
      } else {
        this.servise.updateReminder(this.forms.value).subscribe((res) => {
          this.ngOnInit();
        });
      }
    }
  
    deletes(task: UserInter) {
      this.servise.delete(task).subscribe((res) => {
        this.ngOnInit();
      });
    }
  
    edits(tasks: UserInter) {
      this.forms = new FormGroup({
        id: new FormControl(tasks.id),
        fullname: new FormControl(tasks.fullname),
        username: new FormControl(tasks.username),
        email: new FormControl(tasks.email),
        mobile: new FormControl(tasks.mobile),
        mcode: new FormControl(tasks.mcode),
        password: new FormControl(tasks.password),
        confirmpassword: new FormControl(tasks.confirmpassword),
        userType: new FormControl(tasks.userType),
     
      });
    }



  


}
