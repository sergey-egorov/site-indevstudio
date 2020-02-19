import { RestService } from '../../services/rest.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vtabs',
  templateUrl: './vtabs.component.html',
  styleUrls: ['./vtabs.component.scss']
})
export class VTabsComponent implements OnInit {

  @Input() viewData = { tabs: [] };

  selected;

  constructor(private restService: RestService) { }

  ngOnInit() {

    for (const tab of this.viewData.tabs) {

      // set selection on first tab
      if (this.selected === undefined) {
        this.selected = tab.id;
      }

      // load html content from html assets
      if (tab.textFile) {
        this.restService.getFile(tab.textFile).then(
          (response) => {
            this.setTabTextHtml(tab.id, response);
          },
          (error) => {
            console.error(this.constructor.name, 'this.restService.getFile(), error = ', error);
          }
        );
      }
    }

  }

  setTabTextHtml(tabId, textHtml) {
    const tab = this.viewData.tabs.find(t => t.id === tabId);
    if (tab) {
      tab.textHtml = textHtml;
    }

    console.log(this.constructor.name, 'setTabTextHtml(), tabId, this.viewData = ', tabId, this.viewData);
  }

}
