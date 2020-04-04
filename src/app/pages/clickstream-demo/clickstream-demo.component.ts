import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, bufferCount, filter } from 'rxjs/operators';

@Component({
  selector: 'app-clickstream-demo',
  templateUrl: './clickstream-demo.component.html',
  styleUrls: ['./clickstream-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickstreamDemoComponent implements OnInit {
  count = 0;
  clickCount = 2;
  clickTimespan = 2000;
  clickOnButton$ = fromEvent(document.getElementsByTagName('button'), 'click');

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.clickOnButton$
      .pipe(
        map(() => new Date().getTime()),
        bufferCount(this.clickCount),
        filter((timestamps) => {
          this.count++;
          this.cdr.detectChanges();
          return timestamps[0] > new Date().getTime() - this.clickTimespan;
        })
      )
      .subscribe();
  }
}
