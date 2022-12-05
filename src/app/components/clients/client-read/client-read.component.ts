import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[];
  displayedColumns = ['name', 'status', 'score'];
  totalElements = 0;


  pageEvent: PageEvent;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.clientService.read().subscribe(clients => {
      this.totalElements = clients.length;
      this.clients = clients;
    });
  }

  getVisitantes(): void {
    this.clientService.read().subscribe(clients => {
      var dados: Client[] = [];
      for(let client of clients){
        if(client.status == "VISITANTE"){
          dados.push(client);
        }
      }
      this.totalElements = dados.length;
      this.clients = dados;
    });    
  }

  getLeads(): void {
    this.clientService.read().subscribe(clients => {
      var dados: Client[] = [];
      for(let client of clients){
        if(client.status == "LEAD"){
          dados.push(client);
        }
      }
      this.totalElements = dados.length;
      this.clients = dados;
    });    
  }

  getAgendaMarcada(): void {
    this.clientService.read().subscribe(clients => {
      var dados: Client[] = [];
      for(let client of clients){
        if(client.status == "AGENDA_MARCADA"){
          dados.push(client);
        }
      }
      this.totalElements = dados.length;
      this.clients = dados;
    });  
  }

  getOrcamentoFechado(): void {
    this.clientService.read().subscribe(clients => {
      var dados: Client[] = [];
      for(let client of clients){
        if(client.status == "ORÇAMENTO_FECHADO"){
          dados.push(client);
        }
      }
      this.totalElements = dados.length;
      this.clients = dados;
    });  
  }

  loadClients(): void {
    this.clientService.readWithPagination(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe(clients => {
      this.getTotalElements();
      this.clients = clients;
    });
  }

  getTotalElements(): void{
     this.clientService.getTotalElements().subscribe(total => {
       this.totalElements = total;
     });
  }
}
