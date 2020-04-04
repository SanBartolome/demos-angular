import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  // title$ = new BehaviorSubject('angular-boilerplate');

  constructor() {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.title$.next('Hello!');
    // }, 2000);
  }
}
