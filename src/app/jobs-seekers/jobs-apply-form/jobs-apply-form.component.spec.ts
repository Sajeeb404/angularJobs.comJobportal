import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsApplyFormComponent } from './jobs-apply-form.component';

describe('JobsApplyFormComponent', () => {
  let component: JobsApplyFormComponent;
  let fixture: ComponentFixture<JobsApplyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsApplyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsApplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
