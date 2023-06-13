import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsApplyService } from '../jobs-apply-form/jobs-apply.service';
import { JobApplyForm } from '../jobs-apply-form/jobsApplyFormModel';

@Component({
  selector: 'app-jobs-apply-list-edit',
  templateUrl: './jobs-apply-list-edit.component.html',
  styleUrls: ['./jobs-apply-list-edit.component.css']
})
export class JobsApplyListEditComponent implements OnInit {

  id!: number;
  post!: JobApplyForm;
  forms!: FormGroup;

  constructor(private servis: JobsApplyService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.servis.find(this.id).subscribe((data: JobApplyForm) => {
      this.post = data;
    });
    this.forms = new FormGroup({
      id: new FormControl(),
      fullname: new FormControl(),
      email: new FormControl(),
      mobileNumber: new FormControl(),
      expectedSalary: new FormControl(),
      workExperience: new FormControl(),
      presentAddress: new FormControl(),
      permanetAddress: new FormControl(),
    })
  }

  update() {
    this.servis.updateReminder(this.id, this.forms.value).subscribe((res: any) => {
      this.router.navigateByUrl('/JobsSeekers/post/apllyList');
    })
  }

}
