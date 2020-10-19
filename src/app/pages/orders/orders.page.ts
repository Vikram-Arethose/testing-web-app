import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  dataToShow: string;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(value: string) {
    this.dataToShow = value;
    console.log('Segment changed', value);
  }
}
