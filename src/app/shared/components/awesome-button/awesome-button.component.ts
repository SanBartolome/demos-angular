import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

import { takeUntilDestroy } from 'src/app/lib/helpers/rxjs.helper';

@Component({
  selector: 'app-awesome-button',
  template: '<button #btn><ng-content></ng-content></button>',
  styleUrls: ['./awesome-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwesomeButtonComponent implements AfterViewInit {
  @ViewChild('btn') btnElm: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    fromEvent(this.btnElm.nativeElement, 'click')
      .pipe(
        tap(() => {
          this.btnElm.nativeElement.classList.add('scaleBounce');
          setTimeout(() => {
            this.btnElm.nativeElement.classList.remove('scaleBounce');
          }, 200);
        }),
        takeUntilDestroy(this)
      )
      .subscribe();
  }
}
