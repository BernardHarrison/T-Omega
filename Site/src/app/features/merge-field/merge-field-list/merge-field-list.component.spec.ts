import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeFieldListComponent } from './merge-field-list.component';

describe('MergeFieldListComponent', () => {
  let component: MergeFieldListComponent;
  let fixture: ComponentFixture<MergeFieldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeFieldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
