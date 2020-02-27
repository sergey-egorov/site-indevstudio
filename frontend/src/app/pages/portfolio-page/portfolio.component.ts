import { Component, OnInit } from '@angular/core';

import { model } from './../../model/model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  Object = Object;

  model = model;

  constructor() { }

  ngOnInit() {
  }
}
