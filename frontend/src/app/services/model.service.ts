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
