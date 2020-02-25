import { Component, OnInit, Input } from '@angular/core';

export class Tile1Data {
  id: string;
  title: string;
  note: string;
  img: string;
};

@Component({
  selector: 'app-tile1',
  templateUrl: './tile1.component.html',
  styleUrls: ['./tile1.component.scss']
})
export class Tile1Component implements OnInit {

  @Input() item: Tile1Data;

  constructor() { }

  ngOnInit() {
  }

}
