import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-other-options',
  templateUrl: './other-options.component.html',
  styleUrls: ['./other-options.component.scss'],
})
export class OtherOptionsComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }

}
