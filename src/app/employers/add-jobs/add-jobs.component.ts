import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit{
  
  forms!: FormGroup;

  constructor(private servise: PostService, private router: Router) { }

  ngOnInit() {
    this.forms = new FormGroup({
      id: new FormControl(),
      companyName: new FormControl(),
      JobTitle: new FormControl(),
      compnayCatagory: new FormControl(),
      requiredLocation: new FormControl(),
      requiredEduction: new FormControl(),
      requiredExperience: new FormControl(),
      vacancy: new FormControl()
    })
  }


  submit() {
         this.servise.addTask(this.forms.value).subscribe((res) => {
        
        alert("Your Job Post Successfull")
        this.ngOnInit();
      });


      // this.router.navigateByUrl('employers/post/home');  
  }


}
