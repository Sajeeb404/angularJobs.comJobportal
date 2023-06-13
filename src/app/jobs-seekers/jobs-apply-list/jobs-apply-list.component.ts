import { Component } from '@angular/core';
import { JobsApplyService } from '../jobs-apply-form/jobs-apply.service';
import { JobApplyForm } from '../jobs-apply-form/jobsApplyFormModel';

@Component({
  selector: 'app-jobs-apply-list',
  templateUrl: './jobs-apply-list.component.html',
  styleUrls: ['./jobs-apply-list.component.css']
})
export class JobsApplyListComponent {

  appliedList!:JobApplyForm[];

  constructor(private servise:JobsApplyService){}
  
  ngOnInit(): void {
    this.servise.getTasK().subscribe((res)=>{
      this.appliedList = res;
    })
  }


  delete(task:JobApplyForm){
    this.servise.delete(task).subscribe((res)=>{
      this.ngOnInit();
    })
  }
}
