import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerSectionsComponent } from './designer-sections.component';

describe('DesignerSectionsComponent', () => {
  let component: DesignerSectionsComponent;
  let fixture: ComponentFixture<DesignerSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
