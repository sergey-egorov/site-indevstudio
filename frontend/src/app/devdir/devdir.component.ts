import { Component, OnInit } from '@angular/core';


const viewData = {
  tab: [
    {
      id: 'web',
      tabTitle: 'Web',
      textTitle: 'Web Applications',
      textHtml: 'Web Applications',
    }
  ]
};


@Component({
  selector: 'app-devdir',
  templateUrl: './devdir.component.html',
  styleUrls: ['./devdir.component.scss']
})
export class DevdirComponent implements OnInit {

  viewData = viewData;

  devtab = 'web';

  constructor() { }

  ngOnInit() {
  }

}
