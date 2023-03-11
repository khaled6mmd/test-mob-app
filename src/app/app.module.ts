import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PackageFeaturesComponent } from './components/package-features/package-features.component';
import { SimilarPackagesComponent } from './components/similar-packages/similar-packages.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompareStickyButtonComponent } from './components/compare-sticky-button/compare-sticky-button.component';
import { PackageGridComponent } from './components/package-features/package-grid/package-grid.component';
import { PackageCardComponent } from './components/similar-packages/package-card/package-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackageFeaturesComponent,
    SimilarPackagesComponent,
    FooterComponent,
    CompareStickyButtonComponent,
    PackageGridComponent,
    PackageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
