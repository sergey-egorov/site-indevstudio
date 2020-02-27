import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile2',
  templateUrl: './tile2.component.html',
  styleUrls: ['./tile2.component.scss']
})
export class Tile2Component implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
