import { model } from './../../model/model';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesPageComponent implements OnInit {

  model = model;

  constructor() { }

  ngOnInit() {
  }

}
