import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { DevtypeComponent } from './devtype/devtype.component';
import { HomeContactUsComponent } from './home-contact-us/home-contact-us.component';
import { DevdirComponent } from './devdir/devdir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ServicesComponent,
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
