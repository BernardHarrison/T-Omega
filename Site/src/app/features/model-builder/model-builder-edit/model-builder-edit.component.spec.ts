import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBuilderEditComponent } from './model-builder-edit.component';

describe('ModelBuilderEditComponent', () => {
  let component: ModelBuilderEditComponent;
  let fixture: ComponentFixture<ModelBuilderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBuilderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBuilderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
