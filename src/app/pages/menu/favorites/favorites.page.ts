import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeBranch } from '../../../models/http/homeBranch';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  bakeries: Observable<HomeBranch[]>;

  constructor(
    private httpServ: HttpService
  ) { }

  ngOnInit() {
    this.bakeries = this.httpServ.getFavorites();
  }

  onFavorite(bakeryId: number, $event) {
    this.httpServ.removeAddToFavorites(bakeryId).subscribe(res => {
      this.httpServ.getFavorites();
    });
    $event.stopPropagation();
  }

}
