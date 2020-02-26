import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeObjectEditComponent } from './merge-object-edit.component';

describe('MergeObjectEditComponent', () => {
  let component: MergeObjectEditComponent;
  let fixture: ComponentFixture<MergeObjectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeObjectEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeObjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
