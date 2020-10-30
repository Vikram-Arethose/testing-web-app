import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  dataToShow = 'current';
  header: string;
  isConfirm: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.isConfirm = this.router.getCurrentNavigation().extras.state.isConfirm;
      }
    });
  }

  ngOnInit() {
  }

  segmentChanged(value: string) {
    this.dataToShow = value;
    console.log('Segment changed', value);
  }
}
