import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MergeObjectDummyComponent } from "./merge-object-dummy.component";

describe("MergeObjectComponentComponent", () => {
  let component: MergeObjectDummyComponent;
  let fixture: ComponentFixture<MergeObjectDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MergeObjectDummyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeObjectDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
