import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertanicaWorkshopsComponent } from './huertanica-workshops.component';

describe('HuertanicaWorkshopsComponent', () => {
  let component: HuertanicaWorkshopsComponent;
  let fixture: ComponentFixture<HuertanicaWorkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuertanicaWorkshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuertanicaWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
