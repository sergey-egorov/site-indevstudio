import { Component, OnInit } from '@angular/core';

import { model } from './../../model/model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  Object = Object;

  model = model;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }
}
