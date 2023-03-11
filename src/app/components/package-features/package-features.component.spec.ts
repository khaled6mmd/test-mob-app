import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageFeaturesComponent } from './package-features.component';

describe('PackageFeaturesComponent', () => {
  let component: PackageFeaturesComponent;
  let fixture: ComponentFixture<PackageFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
