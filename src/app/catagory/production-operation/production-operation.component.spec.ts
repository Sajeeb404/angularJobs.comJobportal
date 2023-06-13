import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOperationComponent } from './production-operation.component';

describe('ProductionOperationComponent', () => {
  let component: ProductionOperationComponent;
  let fixture: ComponentFixture<ProductionOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
