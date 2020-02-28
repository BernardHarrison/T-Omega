import { Component, OnInit } from '@angular/core';
import { DesignerVmAppState } from './store/designer-vm.module';
import { Store } from '@ngrx/store';
import { DesignerTemplate } from 'src/app/stores/designer-store';

@Component({
  selector: 'designer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  template: DesignerTemplate;

  constructor(private store: Store<DesignerVmAppState>) {

  }

  ngOnInit(): void {
    this.template = {
      title: "title",
      backgroundColor: "#eeeeee",
      sections: [
        {
          widthBehavior: null,
          width: null,
          innerBackgroundColor: "#333333",
          outerBackgroundColor: "#aaaaaa"
        }
      ]
    }
  }

}
