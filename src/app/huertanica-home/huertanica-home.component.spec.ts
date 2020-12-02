import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertanicaHomeComponent } from './huertanica-home.component';

describe('HuertanicaHomeComponent', () => {
  let component: HuertanicaHomeComponent;
  let fixture: ComponentFixture<HuertanicaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuertanicaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuertanicaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
