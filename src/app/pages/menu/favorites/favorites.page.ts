import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeBranch } from '../../../models/http/homeBranch';
import { HttpService } from '../../../services/http.service';
import { BakeryService } from '../../../services/bakery.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  bakeries: Observable<HomeBranch[]>;
  today: string;

  constructor(
    public bakeryServ: BakeryService,
    private httpServ: HttpService
  ) { }

  ngOnInit() {
    this.bakeries = this.httpServ.getFavorites();
    this.setToday();
  }

  setToday() {
    const date = new Date();
    const day = date.getDay();
    const weekDays: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.today = weekDays[day];
  }

  onFavorite(bakeryId: number, $event) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(res => {
      this.bakeries = this.httpServ.getFavorites();
    });
    $event.stopPropagation();
  }

}
