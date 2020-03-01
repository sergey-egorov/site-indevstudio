import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tile3',
  templateUrl: './tile3.component.html',
  styleUrls: ['./tile3.component.scss']
})
export class Tile3Component implements OnInit {

  @Input() item;
  @Input() inverse = false;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
