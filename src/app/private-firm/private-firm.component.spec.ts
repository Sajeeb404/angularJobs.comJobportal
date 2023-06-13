import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateFirmComponent } from './private-firm.component';

describe('PrivateFirmComponent', () => {
  let component: PrivateFirmComponent;
  let fixture: ComponentFixture<PrivateFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateFirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
