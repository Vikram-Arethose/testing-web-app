import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.page.html',
  styleUrls: ['./bakery.page.scss'],
})
export class BakeryPage implements OnInit {
  selected: boolean[] = [];
  sections: string[] = ['Rolls', 'Bread', 'Cake', 'Lunch', 'Rolls', 'Bread', 'Cake', 'Lunch'];

  constructor() { }

  ngOnInit() {
    this.selected[0] = true;
  }

  onSectionSelect(index: number) {
    this.selected.length = 0;
    this.selected[index] = !this.selected[index];
  }
}
