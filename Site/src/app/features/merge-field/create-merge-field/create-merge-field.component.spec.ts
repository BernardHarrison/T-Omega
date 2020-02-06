import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMergeFieldComponent } from './create-merge-field.component';

describe('CreateMergeFieldComponent', () => {
  let component: CreateMergeFieldComponent;
  let fixture: ComponentFixture<CreateMergeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMergeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMergeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
