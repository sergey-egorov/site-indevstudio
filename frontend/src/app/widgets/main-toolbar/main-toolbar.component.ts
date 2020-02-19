import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  @Input() page = 'home';

  dark = false;

  constructor() { }

  ngOnInit() {
    this.dark = this.page !== 'home';
  }

}
