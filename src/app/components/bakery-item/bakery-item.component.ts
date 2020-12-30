import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeBranch } from '../../models/http/homeBranch';
import { NavigationExtras, Router } from '@angular/router';
import { BakeryService } from '../../services/bakery.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-bakery-item',
  templateUrl: './bakery-item.component.html',
  styleUrls: ['./bakery-item.component.scss'],
})
export class BakeryItemComponent implements OnInit {

  @Input() bakery: HomeBranch;
  @Input() today: string;
  @Output() onFavourite = new EventEmitter();
  iconHeartOutline = '../../../assets/icons/bakery/heart-outline.svg';
  iconHeartFilled = '../../../assets/icons/bakery/heart-filled.svg';

  constructor(
    public bakeryServ: BakeryService,
    private httpServ: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setToday();
  }

  onFavorite(bakeryId: number, $event) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(res => {
      this.onFavourite.emit();
    });
    $event.stopPropagation();
  }

  setToday() {
    const date = new Date();
    const day = date.getDay();
    const weekDays: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.today = weekDays[day];
  }

  openBakery(bakeryId: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        bakeryId
      }
    };
    this.router.navigate(['/bakery-search/bakery'], navigationExtras);
  }

}
