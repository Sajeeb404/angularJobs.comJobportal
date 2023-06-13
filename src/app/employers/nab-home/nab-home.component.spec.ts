import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabHomeComponent } from './nab-home.component';

describe('NabHomeComponent', () => {
  let component: NabHomeComponent;
  let fixture: ComponentFixture<NabHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
