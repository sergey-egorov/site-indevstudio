import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio.component';
import { ServicesPageComponent } from './pages/services-page/services.component';
import { MainToolbarComponent } from './widgets/main-toolbar/main-toolbar.component';
import { HomeContactUsComponent } from './widgets/home-contact-us/home-contact-us.component';
import { VTabsComponent } from './widgets/vtabs/vtabs.component';
import { HomePageSplashComponent } from './pages/home-page-splash/home-page-splash.component';
import { Tile1Component } from './widgets/tile1/tile1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PortfolioPageComponent,
    ServicesPageComponent,
    MainToolbarComponent,
    HomeContactUsComponent,
    VTabsComponent,
    HomePageSplashComponent,
    Tile1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
