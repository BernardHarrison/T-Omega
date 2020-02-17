import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModelBuilderActions, ModelBuilderAppState } from 'src/app/stores/model-builder-store/model-builder-store.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store<ModelBuilderAppState>,
    private modelBuilderActions: ModelBuilderActions) { }

  ngOnInit() {
    this.store.dispatch(this.modelBuilderActions.load());
  }

}
