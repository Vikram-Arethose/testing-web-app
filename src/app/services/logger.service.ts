import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(description?, value?: any) {
    console.log(description, value);
  }
}
