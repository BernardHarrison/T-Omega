import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeFieldComponentComponent } from './merge-field-component.component';

describe('MergeFieldComponentComponent', () => {
  let component: MergeFieldComponentComponent;
  let fixture: ComponentFixture<MergeFieldComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeFieldComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
