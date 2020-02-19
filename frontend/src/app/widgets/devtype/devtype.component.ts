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
      img: 'assets/img/web.svg',
      imgsize: '12em',
    },
    'mobile': {
      title: 'Mobile',
      note: 'Mobile apps for work and entertainment',
      img: 'assets/img/mobile.svg',
      imgsize: '12em',
    },
    'desktop': {
      title: 'Desktop',
      note: 'Specialized desktop software for complex tasks',
      img: 'assets/img/desktop.svg',
      imgsize: '12em',
    },
    'system': {
      title: 'System',
      note: 'Complex distributed systems for business',
      img: 'assets/img/system.svg',
      imgsize: '12em',
    },

    'softdev': {
      title: 'Software Development',
      note: 'Software development for any purpose',
      img: 'assets/img/softdev-2.svg',
      imgsize: '15em',
    },
    'integration': {
      title: 'Integration',
      note: 'Building complex software solutions from heterogeneous components',
      img: 'assets/img/integration.svg',
      imgsize: '15em',
    }

  };

  constructor() { }

  ngOnInit() {
  }

}
