import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { ModalController } from '@ionic/angular';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-pick-up-date',
  templateUrl: './pick-up-date.component.html',
  styleUrls: ['./pick-up-date.component.scss'],
})
export class PickUpDateComponent implements OnInit {
  @Input() isVerify;
  today: string = new Date().toISOString();
  datePickerMin: string;
  date: string;
  time: string;
  private dateGlobal: string;

  constructor(
    public dateService: DateService,
    private modalController: ModalController,
    private logger: LoggerService,
  ) { }

  ngOnInit() {
    this.datePickerMin = this.dateService.getDatePickerMin();
    this.dateService.dateShared.subscribe(res => this.dateGlobal);
    if (this.dateGlobal) {
      this.date = this.time = this.dateGlobal;
    }
    this.logger.log('date: ', this.date);
    this.logger.log('date: ', this.time);
  }

  onToday() {
    this.date = this.today;
  }

  onTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.date = tomorrow.toISOString();
  }

  onTimeChange($event) {
    this.time = $event.target.value;
  }

  onConfirm() {
    this.date = this.date.split('T')[0];
    this.time = this.time.split('T')[1];
    this.dateService.changeDate(this.date + 'T' + this.time);
    this.logger.log('date: ', this.date);
    this.logger.log('time: ', this.time);
    this.closeModal();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
