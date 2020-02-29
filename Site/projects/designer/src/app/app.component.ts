import { Component, OnInit } from '@angular/core';
import { DesignerVmAppState } from './store/designer-vm.module';
import { Store } from '@ngrx/store';
import { DesignerTemplate, DesignerSection } from 'src/app/stores/designer-store';
import { loadStarterSections } from 'src/app/stores/designer-store/designer-store.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'designer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  starterTemplates$: Observable<DesignerTemplate[]>;
  starterSection$: Observable<DesignerSection[]>;

  template: DesignerTemplate;

  constructor(private store: Store<DesignerVmAppState>) {

  }

  ngOnInit(): void {
    this.starterSection$ = this.store.select(x => x.designerStore.starterSections.entity);
    this.starterTemplates$ = this.store.select(x => x.designerStore.starterTemplates.entity);

    this.store.dispatch(loadStarterSections());

    this.template = {
      title: "title",
      backgroundColor: "#eeeeee",
      sections: []
    }
  }

}
