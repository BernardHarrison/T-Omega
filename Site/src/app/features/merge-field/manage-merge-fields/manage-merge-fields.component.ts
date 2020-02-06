import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MergeField, MergeFieldAppState } from '..';
import { LoadMergeFields } from '../merge-field.actions';

@Component({
  selector: 'app-manage-merge-fields',
  templateUrl: './manage-merge-fields.component.html',
  styleUrls: ['./manage-merge-fields.component.scss']
})
export class ManageMergeFieldsComponent implements OnInit {

  list$: Observable<MergeField[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<MergeFieldAppState>) {
  }

  ngOnInit() {
    this.list$ = this.store.select(state => state.mergeField.list);
    this.loading$ = this.store.select(state => state.mergeField.loadingStatus.busy);

    this.store.dispatch(new LoadMergeFields());
  }

}
