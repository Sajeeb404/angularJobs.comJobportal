import { Component, OnInit } from '@angular/core';
import { AddJobs } from 'src/app/employers/add-jobs/AddJobsModel';
import { PostService } from 'src/app/employers/add-jobs/post.service';

@Component({
  selector: 'app-jobs-homes-nab',
  templateUrl: './jobs-homes-nab.component.html',
  styleUrls: ['./jobs-homes-nab.component.css']
})
export class JobsHomesNabComponent implements OnInit {

  selfJobList!:AddJobs[];

  constructor(private ser:PostService){
  }

  ngOnInit(): void {
    this.ser.getTasK().subscribe((rest)=>{
      this.selfJobList= rest;
    })
    
  }

}
