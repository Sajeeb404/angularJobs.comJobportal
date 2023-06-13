import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsApplyListComponent } from './jobs-apply-list.component';

describe('JobsApplyListComponent', () => {
  let component: JobsApplyListComponent;
  let fixture: ComponentFixture<JobsApplyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsApplyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsApplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
