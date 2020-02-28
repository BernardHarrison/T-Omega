import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeObjectComponentComponent } from './merge-object-component.component';

describe('MergeObjectComponentComponent', () => {
  let component: MergeObjectComponentComponent;
  let fixture: ComponentFixture<MergeObjectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeObjectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeObjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
