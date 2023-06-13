import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootVarComponent } from './foot-var.component';

describe('FootVarComponent', () => {
  let component: FootVarComponent;
  let fixture: ComponentFixture<FootVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
