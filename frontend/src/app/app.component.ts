import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../environments/environment';

import { ModelService } from './services/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private translateService: TranslateService,
    private modelService: ModelService) {

    this.translateService.use(environment.defaultLocale);
    this.modelService.loadContent();
  }
}
