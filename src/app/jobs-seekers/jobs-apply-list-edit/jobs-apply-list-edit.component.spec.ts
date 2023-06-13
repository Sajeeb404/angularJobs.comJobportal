import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsApplyListEditComponent } from './jobs-apply-list-edit.component';

describe('JobsApplyListEditComponent', () => {
  let component: JobsApplyListEditComponent;
  let fixture: ComponentFixture<JobsApplyListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsApplyListEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsApplyListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
