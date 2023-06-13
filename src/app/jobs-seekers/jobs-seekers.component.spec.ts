import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsSeekersComponent } from './jobs-seekers.component';

describe('JobsSeekersComponent', () => {
  let component: JobsSeekersComponent;
  let fixture: ComponentFixture<JobsSeekersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsSeekersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsSeekersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
