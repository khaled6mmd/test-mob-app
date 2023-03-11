import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareStickyButtonComponent } from './compare-sticky-button.component';

describe('CompareStickyButtonComponent', () => {
  let component: CompareStickyButtonComponent;
  let fixture: ComponentFixture<CompareStickyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareStickyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareStickyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
