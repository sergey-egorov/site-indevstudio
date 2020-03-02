import { Component, OnInit } from '@angular/core';
import { model } from '../../model/model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-ext',
  templateUrl: './services-ext.component.html',
  styleUrls: ['./services-ext.component.scss']
})
export class ServicesExtPageComponent implements OnInit {

  selected = 'web';

  model = model;

  itemList = [];

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.itemList = [].concat(model.pages.services.software_development.items);
    this.itemList = this.itemList.concat(model.pages.services.client_services.items);
  }

  getCompetencies(competenceIdList) {
    const result = [];
    for (const competenceId of competenceIdList) {
      let competence = this.model.competencies.find(c => c.id === competenceId);
      if (competence) {
        result.push(competence);
      }
    }
    return result;
  }

}
