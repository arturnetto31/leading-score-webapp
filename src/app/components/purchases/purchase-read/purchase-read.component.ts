import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase.model';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase-read',
  templateUrl: './purchase-read.component.html',
  styleUrls: ['./purchase-read.component.css']
})
export class PurchaseReadComponent implements OnInit {

  purchases: Purchase[];

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.read().subscribe(purchases=>{
      this.purchases = purchases;
      console.log(purchases);
    })
  }

}