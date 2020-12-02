import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertanicaContactComponent } from './huertanica-contact.component';

describe('HuertanicaContactComponent', () => {
  let component: HuertanicaContactComponent;
  let fixture: ComponentFixture<HuertanicaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuertanicaContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuertanicaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
