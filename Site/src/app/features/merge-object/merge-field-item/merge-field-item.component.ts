import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MergeField } from 'src/app/stores/merge-field-store';

@Component({
  selector: 'app-merge-field-item',
  templateUrl: './merge-field-item.component.html',
  styleUrls: ['./merge-field-item.component.scss']
})
export class MergeFieldItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() field: MergeField;

  @Output() removeRequest = new EventEmitter<MergeField>()

  remove() {
    this.removeRequest.emit(this.field);
  }

}
