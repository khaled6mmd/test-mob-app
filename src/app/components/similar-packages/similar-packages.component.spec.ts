import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarPackagesComponent } from './similar-packages.component';

describe('SimilarPackagesComponent', () => {
  let component: SimilarPackagesComponent;
  let fixture: ComponentFixture<SimilarPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
