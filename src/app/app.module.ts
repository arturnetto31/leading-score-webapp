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
import { BookCrudComponent } from './views/book-crud/book-crud.component';
import { PurchaseCrudComponent } from './views/purchase-crud/purchase-crud.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { BookCreateComponent } from './components/books/book-create/book-create.component';
import { PurchaseCreateComponent } from './components/purchases/purchase-create/purchase-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClientReadComponent } from './components/clients/client-read/client-read.component';
import { BookReadComponent } from './components/books/book-read/book-read.component';
import { PurchaseReadComponent } from './components/purchases/purchase-read/purchase-read.component';
import { MatTableModule } from '@angular/material/table';
import localePt from '@angular/common/locales/pt';
import  { registerLocaleData } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BookUpdateComponent } from './components/books/book-update/book-update.component';
import { PurchaseUpdateComponent } from './components/purchases/purchase-update/purchase-update.component';
import { PurchaseReadUniqueComponent } from './components/purchases/purchase-read/purchase-read-unique/purchase-read-unique.component';
import { BookDeleteComponent } from './components/books/book-delete/book-delete.component';
import { PurchaseDeleteComponent } from './components/purchases/purchase-delete/purchase-delete.component';
import { BookReadUniqueComponent } from './components/books/book-read/book-read-unique/book-read-unique.component';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'





registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClientCrudComponent,
    BookCrudComponent,
    PurchaseCrudComponent,
    ClientCreateComponent,
    BookCreateComponent,
    PurchaseCreateComponent,
    ClientReadComponent,
    BookReadComponent,
    PurchaseReadComponent,
    BookUpdateComponent,
    PurchaseUpdateComponent,
    PurchaseReadUniqueComponent,
    BookDeleteComponent,
    PurchaseDeleteComponent,
    BookReadUniqueComponent
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
