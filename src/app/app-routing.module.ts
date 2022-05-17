import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/books/book-create/book-create.component';
import { BookUpdateComponent } from './components/books/book-update/book-update.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { ClientUpdateComponent } from './components/clients/client-update/client-update.component';
import { PurchaseCreateComponent } from './components/purchases/purchase-create/purchase-create.component';
import { PurchaseUpdateComponent } from './components/purchases/purchase-update/purchase-update.component';
import { BookCrudComponent } from './views/book-crud/book-crud.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { HomeComponent } from './views/home/home.component';
import { PurchaseCrudComponent } from './views/purchase-crud/purchase-crud.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
  {
    path:"clients",
    component: ClientCrudComponent
  },
  {
    path:"clients/create",
    component: ClientCreateComponent
  },
  {
    path:"clients/update/:uuid",
    component: ClientUpdateComponent
  },
  {
    path:"books",
    component: BookCrudComponent
  },
  {
    path:"books/create",
    component: BookCreateComponent
  },
  {
    path:"books/update/:uuid",
    component: BookUpdateComponent
  },
  {
    path:"purchases",
    component: PurchaseCrudComponent
  },
  {
    path:"purchases/create",
    component: PurchaseCreateComponent
  },
  {
    path:"purchases/update/:uuid",
    component: PurchaseUpdateComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
