import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { ModalController } from '@ionic/angular';
import { LoggerService } from '../../services/logger.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pick-up-date',
  templateUrl: './pick-up-date.component.html',
  styleUrls: ['./pick-up-date.component.scss'],
})
export class PickUpDateComponent implements OnInit {
  @Input() isVerify;
  activeBtn: string;
  cancel: string = this.translate.instant('dateChoose.cancel');
  customPickerOptions: any;
  date: string;
  datePickerMin: string;
  datePickerMax: string;
  done: string = this.translate.instant('dateChoose.done');
  today: string = new Date().toISOString();
  tomorrow: string;
  time: string;
  timePickerMin: string;
  private dateGlobal: string;
  private timeHourOffset: number;

  constructor(
    public dateService: DateService,
    private alertServ: AlertService,
    private logger: LoggerService,
    private modalController: ModalController,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.tomorrow = tomorrow.toISOString();
    this.date = this.time = this.dateService.getDefaultMinOrderDate().toISOString();
    console.log('this.date', this.date);
    this.setActiveBtn();
    this.dateService.dateShared.subscribe((res: string) => {
      if (res) {
        this.date = this.time = res;
        this.setActiveBtn(res);
        this.getPickersRanges();
      }
      this.dateGlobal = res;
    });
  }

  setActiveBtn(date?: string) {
    if (!date) {
      date = this.date;
    }
    const receivedDate = date.split('T')[0];
    if (receivedDate === this.today.split('T')[0]) {
      this.activeBtn = 'today';
    }
    else if (receivedDate === this.tomorrow.split('T')[0]) {
      this.activeBtn = 'tomorrow';
    } else {
      this.activeBtn = null;
    }
  }

  onToday() {
    this.date = this.today;
    this.setActiveBtn();
    this.getPickersRanges();
  }

  onTomorrow() {
    this.date = this.tomorrow;
    this.setActiveBtn();
    this.getPickersRanges();
  }

  onCalendarChange(value: string) {
    this.date = value;
    this.setActiveBtn();
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
      this.activeBtn = null;
      this.alertServ.presentAlert(this.translate.instant('alert.bakeryNotWorkAtThisTime'));
      if (this.isVerify) {
        this.dateService.dateShared.subscribe(res => {
          this.date = this.time = res;
          this.setActiveBtn();
        });
      } else {
        this.dateService.changeDate(this.dateService.getDefaultMinOrderDate().toISOString());
      }
    }
  }

  closeModal() {
    if (!this.dateGlobal) {
      this.router.navigate(['bakery-search']);
    }
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
