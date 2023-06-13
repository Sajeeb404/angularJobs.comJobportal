import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavVarComponent } from './nav-var/nav-var.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { RegiFormComponent } from './regi-form/regi-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { GovernmentComponent } from './government/government.component';
import { PrivateFirmComponent } from './private-firm/private-firm.component';
import { EmployersComponent } from './employers/employers.component';
import { JobsSeekersComponent } from './jobs-seekers/jobs-seekers.component';
import { AccountFinancComponent } from './catagory/account-financ/account-financ.component';
import { ProductionOperationComponent } from './catagory/production-operation/production-operation.component';
import { AdminComponent } from './admin/admin.component';
import { LoginListComponent } from './List/login-list/login-list.component';
import { EditComponent } from './List/login-list/log-edit/edit.component';
import { NabHomeComponent } from './employers/nab-home/nab-home.component';
import { AddJobsComponent } from './employers/add-jobs/add-jobs.component';
import { SelfJobListComponent } from './employers/self-job-list/self-job-list.component';
import { SelfJobListEditComponent } from './employers/self-job-list-edit/self-job-list-edit.component';
import { JobsHomesNabComponent } from './jobs-seekers/jobs-homes-nab/jobs-homes-nab.component';
import { JobsApplyFormComponent } from './jobs-seekers/jobs-apply-form/jobs-apply-form.component';
import { JobsApplyListComponent } from './jobs-seekers/jobs-apply-list/jobs-apply-list.component';
import { JobsApplyListEditComponent } from './jobs-seekers/jobs-apply-list-edit/jobs-apply-list-edit.component';
import { CandidateListComponent } from './employers/candidate-list/candidate-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'post/home', pathMatch:'full'},
  {path:'post/nab-bar', component:NavVarComponent},
  {path:'post/login', component:LoginFormComponent},
  {path:'post/regi', component:RegiFormComponent},
  {path:'post/contact', component:ContactUsComponent},
  {path:'post/about', component:AboutComponent},
  {path:'post/government', component:GovernmentComponent},
  {path:'post/privateFirm', component:PrivateFirmComponent},
  {path:'post/test', component:TestComponent},
  {path:'testRegi/:postId/Edit', component:TestComponent},
  
  {path:'post/home', component:HomeComponent},
  {path:'employers', component:EmployersComponent,
  children:[
    {path:'', component:NabHomeComponent},
    {path:'post/home', component:HomeComponent},
    {path:'post/about', component:AboutComponent},
    {path:'post/contact', component:ContactUsComponent},
    {path:'post/adjobs', component:AddJobsComponent},
    {path:'post/selfJobs', component:SelfJobListComponent},
    {path:'post/candidateList', component:CandidateListComponent},
    {path:'joblist/:postId/Edit', component:SelfJobListEditComponent}
  ]},
  {path:'JobsSeekers', component:JobsSeekersComponent,
  children:[
    {path:'', component:JobsHomesNabComponent},
    {path:'post/about', component:AboutComponent},
    {path:'post/contact', component:ContactUsComponent},
    {path:'post/apllyform', component:JobsApplyFormComponent},
    {path:'post/apllyList', component:JobsApplyListComponent},
    {path:'appliedlist/:postId/Edit', component:JobsApplyListEditComponent}
  ]},
  {path:'post/Account-Finance', component:AccountFinancComponent},
  {path:'post/Production-Operation', component:ProductionOperationComponent},
  {path:'Admin', component:AdminComponent,
  children:[
    {path:'', component:AdminComponent},
    {path:'LoginList', component:LoginListComponent},
    {path:'Login/:postId/Edit', component:EditComponent},
    
  ]},


  
  {path:'**', component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
