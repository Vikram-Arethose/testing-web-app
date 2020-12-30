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

  bakeries: HomeBranch[];
  today: string;

  constructor(
    public bakeryServ: BakeryService,
    private httpServ: HttpService
  ) { }

  ngOnInit() {
    this.getFavoritesBakeries();
    this.setToday();
  }

  setToday() {
    const date = new Date();
    const day = date.getDay();
    const weekDays: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    this.today = weekDays[day];
  }

  getFavoritesBakeries() {
    this.httpServ.getFavorites().subscribe((res: HomeBranch[]) => {
      this.bakeries = res.map(item => ({...item, isFavourite: true}));
    });
  }

  onFavorite(bakeryId: number) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(res => {
      this.getFavoritesBakeries();
    });
  }

}
