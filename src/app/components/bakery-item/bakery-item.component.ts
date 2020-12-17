import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeBranch } from '../../models/http/homeBranch';
import { NavigationExtras, Router } from '@angular/router';
import { BakeryService } from '../../services/bakery.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-branch-item',
  templateUrl: './bakery-item.component.html',
  styleUrls: ['./bakery-item.component.scss'],
})
export class BakeryItemComponent implements OnInit {

  @Input() bakery: HomeBranch;
  @Input() today: string;
  @Output() getBakeries = new EventEmitter();
  iconHeartOutline = '../../../assets/icons/bakery/heart-outline.svg';
  iconHeartFilled = '../../../assets/icons/bakery/heart-filled.svg';

  constructor(
    public bakeryServ: BakeryService,
    private httpServ: HttpService,
  ) { }

  ngOnInit() {}

  onFavorite(bakeryId: number, $event) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(res => {
      this.getBakeries.emit();
    });
    $event.stopPropagation();
  }

}
