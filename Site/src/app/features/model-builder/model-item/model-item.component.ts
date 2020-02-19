import { Component, OnInit, Input } from '@angular/core';
import { MergeObject } from 'src/app/stores/model-builder-store/model-builder-store.module';
import { MergeField } from 'src/app/stores/merge-field-api-store/merge-field-api-store.module';

@Component({
  selector: 'app-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.scss']
})
export class ModelItemComponent implements OnInit {

  @Input() fieldItems: Array<MergeField | MergeObject>
  constructor() { }

  ngOnInit() {
  }

}
