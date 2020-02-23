import { Component, OnInit } from '@angular/core';
import { DesignerVmAppState } from './store/designer-vm.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeWidth } from './store/designer-vm.actions';

@Component({
  selector: 'designer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  width$: Observable<number>;

  constructor(private store: Store<DesignerVmAppState>) {

  }

  ngOnInit(): void {
    this.width$ = this.store.select(x => x.designerVm.width);
  }

  handleLeftSizeHandle(sizeStep: number) {
    let props = { changeAmount: sizeStep * (-1) }
    this.store.dispatch(changeWidth(props))
  }

  handleRightSizeHandle(sizeStep: number) {
    let props = { changeAmount: sizeStep }
    this.store.dispatch(changeWidth(props))
  }
}
