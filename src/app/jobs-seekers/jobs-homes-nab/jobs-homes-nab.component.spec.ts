import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsHomesNabComponent } from './jobs-homes-nab.component';

describe('JobsHomesNabComponent', () => {
  let component: JobsHomesNabComponent;
  let fixture: ComponentFixture<JobsHomesNabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsHomesNabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsHomesNabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
