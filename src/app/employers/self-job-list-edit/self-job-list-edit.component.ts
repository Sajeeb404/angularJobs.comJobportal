import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddJobs } from '../add-jobs/AddJobsModel';
import { PostService } from '../add-jobs/post.service';

@Component({
  selector: 'app-self-job-list-edit',
  templateUrl: './self-job-list-edit.component.html',
  styleUrls: ['./self-job-list-edit.component.css']
})
export class SelfJobListEditComponent implements OnInit {

  id!: number;
  post!: AddJobs;
  forms!: FormGroup;

  constructor(private servis: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.servis.find(this.id).subscribe((data: AddJobs) => {
      this.post = data;
    });
    this.forms = new FormGroup({
      id: new FormControl(),
      companyName: new FormControl(),
      JobTitle: new FormControl(),
      compnayCatagory: new FormControl(),
      requiredLocation: new FormControl(),
      requiredEduction: new FormControl(),
      requiredExperience: new FormControl(),
      vacancy: new FormControl(),
    })
  }

  update() {
    this.servis.updateReminder(this.id, this.forms.value).subscribe((res: any) => {
      this.router.navigateByUrl('/employers/post/selfJobs');
    })
  }

}
