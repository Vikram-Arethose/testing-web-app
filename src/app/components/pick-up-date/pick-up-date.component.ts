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
  datePickerMax: string;
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
    this.datePickerMax = this.dateService.getDatePickerMax();
    this.dateService.dateShared.subscribe(res => {
      if (res) {
        this.date = this.time = res;
      }
      this.dateGlobal = res;
    });
    this.logger.log('date: ', this.date);
    this.logger.log('time: ', this.time);
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
    this.closeModal();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  onCalendarChange(value) {
    this.date = value;
  }
}
