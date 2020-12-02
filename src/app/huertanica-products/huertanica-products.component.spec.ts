import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertanicaProductsComponent } from './huertanica-products.component';

describe('HuertanicaProductsComponent', () => {
  let component: HuertanicaProductsComponent;
  let fixture: ComponentFixture<HuertanicaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuertanicaProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuertanicaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
