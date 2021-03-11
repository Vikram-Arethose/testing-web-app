import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeBranch, OpeningHoursDay } from '../../models/http/homeBranch';
import { NavigationExtras, Router } from '@angular/router';
import { BakeryService } from '../../services/bakery.service';
import { HttpService } from '../../services/http.service';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-bakery-item',
  templateUrl: './bakery-item.component.html',
  styleUrls: ['./bakery-item.component.scss'],
})
export class BakeryItemComponent implements OnInit {

  @Input() bakery: HomeBranch;
  @Input() today: string;
  @Output() favouriteClicked = new EventEmitter();
  iconHeartOutline = '../../../assets/icons/bakery/heart-outline.svg';
  iconHeartFilled = '../../../assets/icons/bakery/heart-filled.svg';
  $guest: Observable<boolean> = this.accountServ.sharedGuest$;

  get openUntil(): string {
    let todayOpeningHours: OpeningHoursDay[] = this.bakery.openingHours?.default[this.today];
    if (Array.isArray(todayOpeningHours)) {
      todayOpeningHours = todayOpeningHours.filter((item: OpeningHoursDay) => item.start && item.end);
      if (todayOpeningHours.length > 0) {
        return todayOpeningHours[todayOpeningHours.length - 1]?.end;
      }
    }
  }

  constructor(
    public accountServ: AccountService,
    public bakeryServ: BakeryService,
    private httpServ: HttpService,
    private logger: LoggerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setToday();
  }

  onFavorite(bakeryId: number, $event) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(res => {
      this.favouriteClicked.emit();
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
