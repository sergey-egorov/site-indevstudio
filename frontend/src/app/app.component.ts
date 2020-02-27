import { ModelService } from './services/model.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private modelService: ModelService) {
    this.modelService.loadContent();
  }
}
