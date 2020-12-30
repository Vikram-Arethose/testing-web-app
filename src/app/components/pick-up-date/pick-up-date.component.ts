import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { ModalController } from '@ionic/angular';
import { LoggerService } from '../../services/logger.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-pick-up-date',
  templateUrl: './pick-up-date.component.html',
  styleUrls: ['./pick-up-date.component.scss'],
})
export class PickUpDateComponent implements OnInit {
  @Input() isVerify;
  activeBtn: string;
  today: string = new Date().toISOString();
  tomorrow: string;
  datePickerMin: string;
  datePickerMax: string;
  date: string;
  time: string;
  timePickerMin: string;
  private dateGlobal: string;
  private timeHourOffset: number;

  constructor(
    public dateService: DateService,
    private modalController: ModalController,
    private logger: LoggerService,
    private alertServ: AlertService
  ) { }

  ngOnInit() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.tomorrow = tomorrow.toISOString();
    this.dateService.dateShared.subscribe((res: string) => {
      if (res) {
        this.date = this.time = res;
        this.setActiveBtn(res);
        this.getPickersRanges();
      }
      this.dateGlobal = res;
    });
  }

  setActiveBtn(date: string) {
    const receivedDate = date.split('T')[0];
    if (receivedDate === this.today.split('T')[0]) {
      this.activeBtn = 'today';
    }
    else if (receivedDate === this.tomorrow.split('T')[0]) {
      this.activeBtn = 'tomorrow';
    }
  }

  onToday() {
    this.date = this.today;
    this.activeBtn = 'today';
    this.getPickersRanges();
  }

  onTomorrow() {
    this.activeBtn = 'tomorrow';
    this.date = this.tomorrow;
    this.getPickersRanges();
  }

  onCalendarChange(value: string) {
    if (value.split('T')[0] === this.today.split('T')[0]) {
      this.date = this.today;
    } else {
      this.date = value;
    }
    this.getPickersRanges();
  }

  onTimeChange($event) {
    this.time = $event.target.value;
  }

  onConfirm() {
    this.date = this.date.split('T')[0];
    this.time = this.time.split('T')[1];
    const dateForCheck = new Date(this.date + 'T' + this.time);
    if (this.dateService.checkSelectedDate(dateForCheck)) {
      this.dateService.changeDate(this.date + 'T' + this.time);
      this.closeModal();
    } else {
      this.alertServ.presentAlert('This bakery doesn\'t work at selected date/time!');
      if (this.isVerify) {
        this.dateService.dateShared.subscribe(res => this.date = this.time = res);
      } else {
        this.date = this.time = null;
      }
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  setTimePickerMin() {
    let timeRangeMin: number;
    const selectedDate = new Date(this.date || this.today);
    (this.date === this.today) ? timeRangeMin = 15 : timeRangeMin = 0;
    const minutes = selectedDate.getMinutes();
    this.timeHourOffset = -(selectedDate.getTimezoneOffset() / 60);
    if (minutes > 30 && minutes < 45) {
      selectedDate.setMinutes(45);
    }
    selectedDate.setHours(selectedDate.getHours() + this.timeHourOffset, selectedDate.getMinutes() + timeRangeMin);
    if (this.date && this.date.split('T')[0] !== this.today.split('T')[0]) {
      selectedDate.setHours(this.timeHourOffset, 0, 0, 0);
    }
    this.timePickerMin = selectedDate.toISOString();
    this.logger.log('timePicker: ', this.timePickerMin);
  }

  getPickersRanges() {
    this.datePickerMin = this.dateService.getDatePickerMin();
    this.datePickerMax = this.dateService.getDatePickerMax();
    this.setTimePickerMin();
  }
}
