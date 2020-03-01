import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DesignerTemplate, DesignerSection, TemplateDefinition } from 'src/app/stores/designer-store';
import { loadStarterSections, loadTemplateDefinition } from 'src/app/stores/designer-store/designer-store.actions';
import { Observable } from 'rxjs';
import { NguCarouselConfig } from '@ngu/carousel';
import { DesignerVmAppState } from './store';

@Component({
  selector: 'designer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  starterTemplates$: Observable<DesignerTemplate[]>;
  starterSection$: Observable<DesignerSection[]>;

  templateDefinition$: Observable<TemplateDefinition>;
  selectedTemplate$: Observable<DesignerTemplate>;

  public carouselTile: NguCarouselConfig = {
    grid: { xs: 0, sm: 0, md: 0, lg: 0, all: 1 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  constructor(private store: Store<DesignerVmAppState>) {

  }

  ngOnInit(): void {
    this.starterSection$ = this.store.select(x => x.designerStore.starterSections.entity);
    this.starterTemplates$ = this.store.select(x => x.designerStore.starterTemplates.entity);
    this.templateDefinition$ = this.store.select(x => x.designerStore.templateDefinition.entity);
    this.selectedTemplate$ = this.store.select(x => x.designerVm.selectedTemplate);

    this.store.dispatch(loadStarterSections());
    this.store.dispatch(loadTemplateDefinition());

  }

}
