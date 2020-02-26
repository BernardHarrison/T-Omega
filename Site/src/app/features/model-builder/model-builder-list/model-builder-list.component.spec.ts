import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBuilderListComponent } from './model-builder-list.component';

describe('ModelBuilderListComponent', () => {
  let component: ModelBuilderListComponent;
  let fixture: ComponentFixture<ModelBuilderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBuilderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBuilderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
