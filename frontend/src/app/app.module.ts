import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { Tile2Component } from './widgets/tile2/tile2.component';
import { Tile3Component } from './widgets/tile3/tile3.component';
import { ServicesExtPageComponent } from './pages/services-ext-page/services-ext.component';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

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
    Tile1Component,
    Tile2Component,
    Tile3Component,
    ServicesExtPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
