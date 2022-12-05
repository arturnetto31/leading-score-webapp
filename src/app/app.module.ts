import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClientReadComponent } from './components/clients/client-read/client-read.component';
import { MatTableModule } from '@angular/material/table';
import localePt from '@angular/common/locales/pt';
import  { registerLocaleData } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppointmentReadComponent } from './components/appointments/appointment-read/appointment-read.component';
import { AppointmentCrudComponent } from './views/appointment-crud/appointment-crud/appointment-crud.component'





registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientCrudComponent,
    ClientCreateComponent,
    ClientReadComponent,
    AppointmentReadComponent,
    AppointmentCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
