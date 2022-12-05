import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Appointment } from '../appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-read',
  templateUrl: './appointment-read.component.html',
  styleUrls: ['./appointment-read.component.css']
})
export class AppointmentReadComponent implements OnInit {

  appointments: Appointment[];
  displayedColumns = ['procedure', 'date', 'appointmentValue', "taskStatus", "clientId"];


  pageEvent: PageEvent;
  totalElements: number;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.read().subscribe(appointments => {
      this.appointments = appointments;
    });
  }

}
