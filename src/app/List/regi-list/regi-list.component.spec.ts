import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiListComponent } from './regi-list.component';

describe('RegiListComponent', () => {
  let component: RegiListComponent;
  let fixture: ComponentFixture<RegiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
