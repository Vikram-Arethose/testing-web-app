import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  title: string;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.title = this.translate.instant('accDetails.yourEmail');
  }

}
