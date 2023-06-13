import { Component, OnInit } from '@angular/core';
import { catagory } from 'src/app/regi-form/model';
import { RegiFormService } from 'src/app/regi-form/regi-form.service';

@Component({
  selector: 'app-account-financ',
  templateUrl: './account-financ.component.html',
  styleUrls: ['./account-financ.component.css']
})
export class AccountFinancComponent implements OnInit {

 catList!:catagory[];

  constructor(private ser:RegiFormService){
  }

  ngOnInit(): void {
    this.ser.getCat().subscribe((rest)=>{
      this.catList= rest;
      console.log(this.catList)
    })
    
  }

}
