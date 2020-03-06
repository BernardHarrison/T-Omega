import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeObjectItemComponent } from './merge-object-item.component';

describe('MergeObjectItemComponent', () => {
  let component: MergeObjectItemComponent;
  let fixture: ComponentFixture<MergeObjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeObjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeObjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
