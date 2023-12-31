import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultsComponent } from './view-results.component';

describe('ViewResultsComponent', () => {
  let component: ViewResultsComponent;
  let fixture: ComponentFixture<ViewResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewResultsComponent]
    });
    fixture = TestBed.createComponent(ViewResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
