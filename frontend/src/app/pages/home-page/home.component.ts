import { Component, OnInit } from '@angular/core';

import { model } from './../../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {

  model = model;

  constructor() { }

  ngOnInit() {
  }

}
