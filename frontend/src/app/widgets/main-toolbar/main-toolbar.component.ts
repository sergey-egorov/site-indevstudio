import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {

  @Input() page = 'home';

  dark = false;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    // this.dark = this.page !== 'home';
  }

  toggleLanguage(language: string) {
    if (language === 'ru') {
      this.translate.use('ru')
      this.translate.currentLang = 'ru'
    } else if (language === 'en'){
      this.translate.use('en')
      this.translate.currentLang = 'en'
    }
  }


}
