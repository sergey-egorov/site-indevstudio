import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesPageComponent } from './pages/services-page/services.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio.component';
import { HomePageComponent } from './pages/home-page/home.component';
import { ServicesExtPageComponent } from './pages/services-ext-page/services-ext.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomePageComponent },
  { path: "portfolio", component: PortfolioPageComponent },
  { path: "services", component: ServicesPageComponent },
  { path: "services-ext", component: ServicesExtPageComponent },
  // { path: '404', component: PagenotfoundComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
