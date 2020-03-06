import { Component, OnInit, Input } from '@angular/core';
import { MergeObject } from 'src/app/stores/merge-object-store';

@Component({
  selector: 'app-merge-object-item',
  templateUrl: './merge-object-item.component.html',
  styleUrls: ['./merge-object-item.component.scss']
})
export class MergeObjectItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() mergeObject: MergeObject;

  edit() {
    //TODO call action to select this merge object
  }

}
