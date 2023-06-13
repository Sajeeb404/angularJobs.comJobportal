import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsApplyService } from './jobs-apply.service';

@Component({
  selector: 'app-jobs-apply-form',
  templateUrl: './jobs-apply-form.component.html',
  styleUrls: ['./jobs-apply-form.component.css']
})
export class JobsApplyFormComponent implements OnInit {

  forms!: FormGroup;

  constructor(private servise: JobsApplyService, private router: Router) { }

  ngOnInit() {
    this.forms = new FormGroup({
      id: new FormControl(),
      fullname: new FormControl(),
      email: new FormControl(),
      mobileNumber: new FormControl(),
      expectedSalary: new FormControl(),
      workExperience: new FormControl(),
      presentAddress: new FormControl(),
      permanetAddress: new FormControl()
    })
  }

  submit() {
    this.servise.addTask(this.forms.value).subscribe((res) => {
      alert("Your Job Apply Successfull")
      this.ngOnInit();
    });
  }


}
