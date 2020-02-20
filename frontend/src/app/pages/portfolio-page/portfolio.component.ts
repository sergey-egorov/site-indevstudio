import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  Object = Object;

  data = {
    'cpn-ide': {
      title: 'CPN IDE',
      note: 'Desktop GUI application for editing, testing and simulating Colored Petri Nets',
      img: 'assets/img/desktop-red.svg',
      imgsize: '10em',
    },
    'tradein': {
      title: 'Smartphone Diagnostic',
      note: 'Smartphone diagnostic mobile applications',
      img: 'assets/img/mobile-red.svg',
      imgsize: '10em',
    },
    'subtitles': {
      title: 'Automatic Subtitles',
      note: 'Automatic subtitles service',
      img: 'assets/img/system-red.svg',
      imgsize: '10em',
    },
    'stc-cloud': {
      title: 'Speech Cloud Portal',
      note: 'Speech Cloud processing service',
      img: 'assets/img/web-red.svg',
      imgsize: '10em',
    },
    // 'cpn-ide-2': {
    //   title: 'CPN IDE',
    //   note: 'Desktop GUI application for editing, testing and simulating Colored Petri Nets',
    //   img: 'assets/img/desktop-red.svg',
    //   imgsize: '10em',
    // },
    // 'tradein-2': {
    //   title: 'Smartphone Diagnostic',
    //   note: 'Smartphone diagnostic mobile applications',
    //   img: 'assets/img/mobile-red.svg',
    //   imgsize: '10em',
    // },
    // 'subtitles-2': {
    //   title: 'Automatic Subtitles',
    //   note: 'Automatic subtitles service',
    //   img: 'assets/img/system-red.svg',
    //   imgsize: '10em',
    // },
    // 'stc-cloud-2': {
    //   title: 'Speech Cloud Portal',
    //   note: 'Speech Cloud processing service',
    //   img: 'assets/img/web-red.svg',
    //   imgsize: '10em',
    // },
  }

  constructor() { }

  ngOnInit() {
  }

}
