import { Component, OnInit, Input } from '@angular/core';
import { DesignerTemplate } from 'src/app/stores/designer-store';

@Component({
  selector: 'designer-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() template: DesignerTemplate;
}
