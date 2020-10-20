import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  open(page: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        page
      }
    };
    this.router.navigate(['account/account-detail'], navigationExtras);
  }

}
