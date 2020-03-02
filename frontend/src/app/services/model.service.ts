import { RestService } from './rest.service';
import { model } from './../model/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  model = model;

  constructor(private restService: RestService) { }

  /**
   * Loading html content from html assets
   */
  loadContent() {
    console.log(this.constructor.name, 'loadContent()');

    // load content from contentFile items
    for (const itemList of [
      this.model.pages.services.software_development.items,
      this.model.pages.services.client_services.items,
      this.model.pages.portfolio.solutions,
      this.model.competencies
    ]) {

      for (const item of itemList) {
        if (item.contentFile) {
          for (const locale in item.contentFile) {
            this.restService.getFile(item.contentFile[locale]).then(
              (response) => {
                item.content[locale] = response.toString();
              },
              (error) => {
                console.error(this.constructor.name, 'loadContent(), error = ', error);
              }
            );
          }
        }
      }

    }
  }

}
