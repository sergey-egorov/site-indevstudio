import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-devtype',
  templateUrl: './devtype.component.html',
  styleUrls: ['./devtype.component.scss']
})
export class DevtypeComponent implements OnInit {

  @Input() type: string = 'web';

  data = {
    'web': {
      title: 'Web',
      note: 'Прекрасные и удобные веб-приложения на все случаи жизни',
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
