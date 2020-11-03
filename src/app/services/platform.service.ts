import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  android = false;
  loginWith: string;

  constructor() { }
}
