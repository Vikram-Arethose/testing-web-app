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
  timePickerMin: string;
  private dateGlobal: string;

  constructor(
    public dateService: DateService,
    private modalController: ModalController,
    private logger: LoggerService,
  ) { }

  ngOnInit() {
    this.dateService.dateShared.subscribe(res => {
      this.getPickersRanges();
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
    this.getPickersRanges();
  }

  onTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    this.date = tomorrow.toISOString();
    this.getPickersRanges();
  }

  onCalendarChange(value) {
    this.date = value;
    this.getPickersRanges();
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

  setTimePickerMin() {
    let timeRangeMin: number;
    // const selectedDate = new Date(date);
    const selectedDate = new Date(this.date || this.today);
    (this.date === this.today) ? timeRangeMin = 15 : timeRangeMin = 0;
    const minutes = selectedDate.getMinutes();
    const timeHourOffset = -(selectedDate.getTimezoneOffset() / 60);
    if (minutes > 30 && minutes < 45) {
      selectedDate.setMinutes(45);
    }
    selectedDate.setHours(selectedDate.getHours() + timeHourOffset, selectedDate.getMinutes() + timeRangeMin);
    this.timePickerMin = selectedDate.toISOString();
    this.logger.log('timePicker: ', this.timePickerMin);
  }

  getPickersRanges() {
    this.datePickerMin = this.dateService.getDatePickerMin();
    this.datePickerMax = this.dateService.getDatePickerMax();
    this.setTimePickerMin();
  }
}
