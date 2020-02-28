import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MergeFieldDummyComponent } from "./merge-field-dummy-component";

describe("MergeFieldComponentComponent", () => {
  let component: MergeFieldDummyComponent;
  let fixture: ComponentFixture<MergeFieldDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MergeFieldDummyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeFieldDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
