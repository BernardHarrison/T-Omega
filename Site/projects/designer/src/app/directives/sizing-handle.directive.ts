import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { tap, takeUntil, map } from 'rxjs/operators';

@Directive({
  selector: '[designerSizingHandle]'
})
export class SizingHandleDirective {

  private mouseDown$: Observable<MouseEvent>;
  private mouseMove$: Observable<MouseEvent>;
  private mouseUp$: Observable<MouseEvent>;

  @Output() designerSizingHandle = new EventEmitter<number>();

  constructor(
    private el: ElementRef
  ) {
    this.mouseDown$ = fromEvent(el.nativeElement, "mousedown");
    this.mouseMove$ = fromEvent(el.nativeElement, "mousemove");
    this.mouseUp$ = fromEvent(el.nativeElement, "mouseup");

    this.mouseDown$.subscribe(() => {
      this.mouseMove$.pipe(
        map(evt => evt.movementX),
        takeUntil(this.mouseUp$)
      ).subscribe({
        next: (val) => {
          this.designerSizingHandle.emit(val);
        }
      });
    });
  }
}
