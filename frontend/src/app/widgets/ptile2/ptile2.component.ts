import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ptile2',
  templateUrl: './ptile2.component.html',
  styleUrls: ['./ptile2.component.scss']
})
export class Ptile2Component implements OnInit {

  @Input() data = {};

  constructor() { }

  ngOnInit() {
  }

}
