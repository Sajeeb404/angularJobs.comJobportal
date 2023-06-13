import { Component } from '@angular/core';
import { JobsApplyService } from 'src/app/jobs-seekers/jobs-apply-form/jobs-apply.service';
import { JobApplyForm } from 'src/app/jobs-seekers/jobs-apply-form/jobsApplyFormModel';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent {

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
