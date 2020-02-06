import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMergeFieldsComponent } from './manage-merge-fields.component';

describe('ManageMergeFieldsComponent', () => {
  let component: ManageMergeFieldsComponent;
  let fixture: ComponentFixture<ManageMergeFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMergeFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMergeFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
