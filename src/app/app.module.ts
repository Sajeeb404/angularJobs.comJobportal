import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FootVarComponent } from './foot-var/foot-var.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavVarComponent } from './nav-var/nav-var.component';
import { RegiFormComponent } from './regi-form/regi-form.component';
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
import { RegiListComponent } from './List/regi-list/regi-list.component';
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



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    ErrorPageComponent,
    FootVarComponent,
    LoginFormComponent,
    NavVarComponent,
    RegiFormComponent,
    TestComponent,
    HomeComponent,
    GovernmentComponent,
    PrivateFirmComponent,
    EmployersComponent,
    JobsSeekersComponent,
    AccountFinancComponent,
    ProductionOperationComponent,
    AdminComponent,
    LoginListComponent,
    RegiListComponent,
    EditComponent,

    NabHomeComponent,
    AddJobsComponent,
    SelfJobListComponent,
    SelfJobListEditComponent,
    JobsHomesNabComponent,
    JobsApplyFormComponent,
    JobsApplyListComponent,
    JobsApplyListEditComponent,
    CandidateListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
