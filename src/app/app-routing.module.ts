import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { AppointmentCrudComponent } from './views/appointment-crud/appointment-crud/appointment-crud.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { HomeComponent } from './views/home/home.component';

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
    path:"appointments",
    component: AppointmentCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
