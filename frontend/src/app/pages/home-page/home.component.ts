import { Tile1Data } from './../../widgets/tile1/tile1.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {

  model: Tile1Data[] = [
    {
      id: 'web',
      title: 'Web',
      note: 'Interactive web apps for all occasions',
      img: 'assets/img/dev-bg-2.png',
    },
    {
      id: 'mobile',
      title: 'Mobile',
      note: 'Mobile apps for work and entertainment',
      img: 'assets/img/mobile-services-1.png',
    },
    {
      id: 'complex',
      title: 'Complex',
      note: 'Complex distributed systems for business',
      img: 'assets/img/dev-bg-1.png',
    },
    {
      id: 'iot',
      title: 'IoT',
      note: 'Software for specialized devices',
      img: 'assets/img/iot-1.png',
    },

    {
      id: 'ivr',
      title: 'Voice IVR',
      note: 'Voice interactive services',
      img: 'assets/img/dev-bg-1.png',
    },
    {
      id: 'chatbot',
      title: 'Chatbot',
      note: 'Intelligent chatbot services with AI',
      img: 'assets/img/dev-bg-2.png',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
