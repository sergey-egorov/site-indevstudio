import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile1',
  templateUrl: './tile1.component.html',
  styleUrls: ['./tile1.component.scss']
})
export class Tile1Component implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
