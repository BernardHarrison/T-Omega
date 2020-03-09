import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeFieldItemComponent } from './merge-field-item.component';

describe('MergeFieldItemComponent', () => {
  let component: MergeFieldItemComponent;
  let fixture: ComponentFixture<MergeFieldItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeFieldItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeFieldItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
