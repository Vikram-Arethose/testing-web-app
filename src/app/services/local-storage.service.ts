import { Injectable } from '@angular/core';
import { DataForLocStorage } from '../models/DataForLocStorage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setArr(dataArr: DataForLocStorage[]) {
    for (const item of dataArr) {
      localStorage.setItem(item.key, JSON.stringify(item.value));
    }
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
