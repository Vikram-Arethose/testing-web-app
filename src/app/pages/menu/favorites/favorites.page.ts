import { Component, OnInit } from '@angular/core';
import { HomeBranch } from '../../../models/http/homeBranch';
import { HttpService } from '../../../services/http.service';
import { BakeryService } from '../../../services/bakery.service';
import { LoggerService } from '../../../services/logger.service';

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
    private httpServ: HttpService,
  ) { }

  ngOnInit() {
    this.getFavoritesBakeries();
  }

  getFavoritesBakeries() {
    this.httpServ.getFavorites().subscribe((res: HomeBranch[]) => {
      this.bakeries = res.map(item => ({...item, isFavourite: true}));
    });
  }

  onFavorite() {
    this.getFavoritesBakeries();
  }

}
