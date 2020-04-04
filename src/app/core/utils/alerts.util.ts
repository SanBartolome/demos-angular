import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsUtil {
  constructor() {}

  async confirm(message: string) {
    return window.confirm(message);
  }
}
