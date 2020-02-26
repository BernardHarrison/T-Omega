import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeObjectListComponent } from './merge-object-list.component';

describe('MergeObjectListComponent', () => {
  let component: MergeObjectListComponent;
  let fixture: ComponentFixture<MergeObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
