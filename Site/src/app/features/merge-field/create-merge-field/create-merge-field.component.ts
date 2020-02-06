import { Component, OnInit } from '@angular/core';
import { MergeFieldTypes, MergeFieldAppState } from '..';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateMergeField } from '../merge-field.actions';

@Component({
  selector: 'app-create-merge-field',
  templateUrl: './create-merge-field.component.html',
  styleUrls: ['./create-merge-field.component.scss']
})
export class CreateMergeFieldComponent implements OnInit {

  loading$: Observable<boolean>;
  name: string;
  mergeFieldTypes = MergeFieldTypes;
  mergeFieldKeys: string[];
  type: MergeFieldTypes;

  constructor(private store: Store<MergeFieldAppState>) {
  }

  ngOnInit() {
    //this.loading$ = this.store.select(state => state.create.busy);
  }

  submit() {
    this.store.dispatch(new CreateMergeField({ name: this.name, type: this.type }));
  }
}
