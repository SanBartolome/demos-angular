import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';

export const takeUntilDestroy = <T>(ngComponent: OnDestroy | any) => {
  return (sourceObservable: Observable<T>) => {
    return new Observable<T>(observer => {
      const sub = sourceObservable.subscribe({
        next: x => observer.next(x),
        error: err => observer.error(err),
        complete: () => observer.complete()
      });
      ngComponent.ngOnDestroy = ngComponent.ngOnDestroy || (() => {});
      const oldOnDestroy =
        ngComponent.ngOnDestroy.bind(ngComponent) || (() => {});
      ngComponent.ngOnDestroy = () => {
        oldOnDestroy();
        sub.unsubscribe();
      };
    });
  };
};
