import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private url: string = 'http://localhost:8080/api/tasks/appointments';

  constructor(private snackBar: MatSnackBar, private http: HttpClient)  { }


  showMessage(msg: string){
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-success']
    });
  }

  showError(msg: string){
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-error']
    });
  }

  read(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url);
  }

}
