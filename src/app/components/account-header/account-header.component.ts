import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss'],
})
export class AccountHeaderComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {}

}
