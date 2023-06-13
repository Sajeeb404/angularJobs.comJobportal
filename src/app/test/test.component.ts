import { Component, OnInit } from '@angular/core';
import { UserRegiTestModel } from './testmodel';
import { FormControl, FormGroup } from '@angular/forms';
import { TestRegiServiceService } from './test-regi-service.service';







@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {


  userList!:UserRegiTestModel[];

  forms!:FormGroup;

  constructor(private servise:TestRegiServiceService,
      ){}

  ngOnInit(){
    this.servise.getTasK().subscribe((userLists:UserRegiTestModel[])=>{
      this.userList = userLists;
    });

   
    this.forms = new FormGroup({
      id: new FormControl(),
      userType: new FormControl(),
      fullname: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      mobile: new FormControl(),
      ssc: new FormControl(),
      hsc: new FormControl(),
      msc: new FormControl(),
      password: new FormControl(),
      confirmpassword: new FormControl(),
     
    })
    this.editdata=false;

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

  
    deletes(task: UserRegiTestModel) {
      this.servise.delete(task).subscribe((res) => {
        this.ngOnInit();
      });
    }

    editdata: boolean=false;
  
    edits(tasks: UserRegiTestModel) {
      this.editdata=true;
      this.forms = new FormGroup({ 
        id: new FormControl(tasks.id),
        userType: new FormControl(tasks.userType),
        fullname: new FormControl(tasks.fullname),
        email: new FormControl(tasks.email),
        gender: new FormControl(tasks.gender),
        mobile: new FormControl(tasks.mobile),
        ssc: new FormControl(tasks.ssc),
        hsc: new FormControl(tasks.hsc),
        msc: new FormControl(tasks.msc),
        password: new FormControl(tasks.password),
        confirmpassword: new FormControl(tasks.confirmpassword),
       
     
      });
  

    }




    


}
