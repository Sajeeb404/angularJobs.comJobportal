import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfJobListComponent } from './self-job-list.component';

describe('SelfJobListComponent', () => {
  let component: SelfJobListComponent;
  let fixture: ComponentFixture<SelfJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfJobListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
