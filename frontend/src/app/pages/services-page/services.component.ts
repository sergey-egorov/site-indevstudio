import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesPageComponent implements OnInit {

  DevelopmentTypesViewData = {
    tabs: [
      {
        id: 'web',
        title: 'Web',
        image: 'assets/img/web-black.svg',
        textTitle: 'Web Applications',
        textFile: 'assets/html/services-web-en.html',
        textHtml: '',
      },
      {
        id: 'mobile',
        title: 'Mobile',
        image: 'assets/img/mobile-black.svg',
        textTitle: 'Mobile Applications',
        textFile: 'assets/html/services-mobile-en.html',
        textHtml: '',
      },
      {
        id: 'desktop',
        title: 'Desktop',
        image: 'assets/img/desktop-black.svg',
        textTitle: 'Desktop Applications',
        textFile: 'assets/html/services-desktop-en.html',
        textHtml: '',
      },
      {
        id: 'system',
        title: 'System',
        image: 'assets/img/system-black.svg',
        textTitle: 'System Applications',
        textFile: 'assets/html/services-system-en.html',
        textHtml: '',
      }
    ]
  };

  DevelopmentDirectionsViewData = {
    tabs: [
      {
        id: 'saas',
        title: 'SaaS',
        image: 'assets/img/web-black.svg',
        textTitle: 'SaaS Solutions',
        textFile: 'assets/html/services-saas-en.html',
        textHtml: '',
      },
      {
        id: 'ivr',
        title: 'IVR',
        image: 'assets/img/web-black.svg',
        textTitle: 'IVR Solution',
        textFile: 'assets/html/services-ivr-en.html',
        textHtml: '',
      },
      {
        id: 'processing',
        title: 'Processing',
        image: 'assets/img/mobile-black.svg',
        textTitle: 'Processing Solutions',
        textFile: 'assets/html/services-processing-en.html',
        textHtml: '',
      },
      {
        id: 'visualisation',
        title: 'Visualisation',
        image: 'assets/img/desktop-black.svg',
        textTitle: 'Visualisation Solutions',
        textFile: 'assets/html/services-visualisation-en.html',
        textHtml: '',
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
