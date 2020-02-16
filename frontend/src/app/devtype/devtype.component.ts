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
      img: '../../assets/img/web.svg',
      imgsize: '12em',
    },
    'mobile': {
      title: 'Mobile',
      note: 'Прекрасные и удобные веб-приложения на все случаи жизни',
      img: '../../assets/img/mobile.svg',
      imgsize: '12em',
    },
    'desktop': {
      title: 'Desktop',
      note: 'Прекрасные и удобные веб-приложения на все случаи жизни',
      img: '../../assets/img/desktop.svg',
      imgsize: '12em',
    },
    'system': {
      title: 'System',
      note: 'Прекрасные и удобные веб-приложения на все случаи жизни',
      img: '../../assets/img/system.svg',
      imgsize: '12em',
    },

    'softdev': {
      title: 'Software Development',
      note: 'Прекрасные и удобные веб-приложения на все случаи жизни',
      img: '../../assets/img/softdev-2.svg',
      imgsize: '15em',
    },
    'integration': {
      title: 'Integration',
      note: 'Прекрасные и удобные веб-приложения на все случаи жизни',
      img: '../../assets/img/integration.svg',
      imgsize: '15em',
    }

  };

  constructor() { }

  ngOnInit() {
  }

}
