import { Component, OnInit, Input } from '@angular/core';
import { DesignerSection } from 'src/app/stores/designer-store';

@Component({
  selector: 'app-designer-sections',
  templateUrl: './designer-sections.component.html',
  styleUrls: ['./designer-sections.component.scss']
})
export class DesignerSectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() sections: DesignerSection[];

}
