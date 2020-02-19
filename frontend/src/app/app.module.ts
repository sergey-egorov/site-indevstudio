import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.component';
import { PortfolioPageComponent } from './pages/portfolio/portfolio.component';
import { ServicesPageComponent } from './pages/services/services.component';
import { MainToolbarComponent } from './widgets/main-toolbar/main-toolbar.component';
import { DevtypeComponent } from './widgets/devtype/devtype.component';
import { HomeContactUsComponent } from './widgets/home-contact-us/home-contact-us.component';
import { DevdirComponent } from './widgets/devdir/devdir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PortfolioPageComponent,
    ServicesPageComponent,
    MainToolbarComponent,
    DevtypeComponent,
    HomeContactUsComponent,
    DevdirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
