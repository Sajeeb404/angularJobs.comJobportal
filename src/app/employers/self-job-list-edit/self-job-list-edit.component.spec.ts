import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfJobListEditComponent } from './self-job-list-edit.component';

describe('SelfJobListEditComponent', () => {
  let component: SelfJobListEditComponent;
  let fixture: ComponentFixture<SelfJobListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfJobListEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfJobListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
