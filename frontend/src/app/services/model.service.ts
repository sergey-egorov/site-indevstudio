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

    // load services content (software_development)
    for (const item of this.model.pages.services.software_development.items) {
      if (item.contentFile) {
        this.restService.getFile(item.contentFile).then(
          (response) => {
            item.content = response.toString();
          },
          (error) => {
            console.error(this.constructor.name, 'loadContent(), error = ', error);
          }
        );
      }
    }

    // load services content (client_services)
    for (const item of this.model.pages.services.client_services.items) {
      if (item.contentFile) {
        this.restService.getFile(item.contentFile).then(
          (response) => {
            item.content = response.toString();
          },
          (error) => {
            console.error(this.constructor.name, 'loadContent(), error = ', error);
          }
        );
      }
    }

    // load portfolio content
    for (const solution of this.model.pages.portfolio.solutions) {
      if (solution.contentFile) {
        this.restService.getFile(solution.contentFile).then(
          (response) => {
            solution.content = response.toString();
          },
          (error) => {
            console.error(this.constructor.name, 'loadContent(), error = ', error);
          }
        );
      }
    }
  }

}
