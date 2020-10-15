import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../services/logger.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  data: string;
  settingLabel: string;
  inputValue: string;
  public title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService
  ) {
    this.route.queryParams.subscribe( params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.page;
        this.logger.log('this.data', this.data);
      }
    });
  }

  ngOnInit() {
    this.chooseDataToShow();
  }

  chooseDataToShow() {
    switch (this.data) {
      case 'name':
        this.title = 'Your Name';
        this.settingLabel = 'Name';
        this.inputValue = 'Jenny';
        break;
      case 'email':
        this.title = 'Your Email-Address';
        this.settingLabel = 'E-Mail-Address';
        this.inputValue = 'Jenny@gmail.com';
        break;
    }
  }

}
