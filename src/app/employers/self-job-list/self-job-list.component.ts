import { Component, OnInit } from '@angular/core';
import { AddJobs } from '../add-jobs/AddJobsModel';
import { PostService } from '../add-jobs/post.service';

@Component({
  selector: 'app-self-job-list',
  templateUrl: './self-job-list.component.html',
  styleUrls: ['./self-job-list.component.css']
})
export class SelfJobListComponent implements OnInit {

  selfJobList!:AddJobs[];

  constructor(private ser:PostService){
  }

  ngOnInit(): void {
    this.ser.getTasK().subscribe((rest)=>{
      this.selfJobList= rest;
    })
    
  }

  deletes(task:AddJobs){
    this.ser.delete(task).subscribe((res)=>{
      this.ngOnInit();
    })
  }



}
