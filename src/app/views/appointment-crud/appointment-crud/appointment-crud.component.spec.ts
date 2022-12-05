import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCrudComponent } from './appointment-crud.component';

describe('AppointmentCrudComponent', () => {
  let component: AppointmentCrudComponent;
  let fixture: ComponentFixture<AppointmentCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
