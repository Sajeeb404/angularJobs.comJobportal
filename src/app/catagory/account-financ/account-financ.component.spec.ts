import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFinancComponent } from './account-financ.component';

describe('AccountFinancComponent', () => {
  let component: AccountFinancComponent;
  let fixture: ComponentFixture<AccountFinancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFinancComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountFinancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
