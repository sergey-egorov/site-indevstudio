import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-devtype',
  templateUrl: './devtype.component.html',
  styleUrls: ['./devtype.component.scss']
})
export class DevtypeComponent implements OnInit {

  @Input() type = 'web';

  data = {
    'web': {
      title: 'Web',
      note: 'Interactive web apps for all occasions',
      img: 'assets/img/dev-bg-2.png',
      imgsize: '100%',
    },
    'mobile': {
      title: 'Mobile',
      note: 'Mobile apps for work and entertainment',
      img: 'assets/img/mobile-services-1.png',
      imgsize: '100%',
    },
    'desktop': {
      title: 'Complex',
      note: 'Complex distributed systems for business',
      img: 'assets/img/dev-bg-1.png',
      imgsize: '100%',
    },
    'system': {
      title: 'IoT',
      note: 'Software for specialized devices',
      img: 'assets/img/iot-1.png',
      imgsize: '100%',
    },

    'softdev': {
      title: 'Software Development',
      note: 'Software development for any purpose',
      img: 'assets/img/dev-bg-1.png',
      imgsize: '100%',
    },
    'integration': {
      title: 'Integration',
      note: 'Building complex software solutions from heterogeneous components',
      img: 'assets/img/dev-bg-2.png',
      imgsize: '100%',
    }

  };

  constructor() { }

  ngOnInit() {
  }

}
