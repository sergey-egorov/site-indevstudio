import { TranslateService } from '@ngx-translate/core';
import { model } from './../../model/model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-ext',
  templateUrl: './portfolio-ext.component.html',
  styleUrls: ['./portfolio-ext.component.scss']
})
export class PortfolioExtPageComponent implements OnInit {

  solution;

  constructor(private activatedRoute: ActivatedRoute, public translate: TranslateService) { }

  ngOnInit() {
    if (this.activatedRoute.params && this.activatedRoute.params['value']) {
      const solutionId = this.activatedRoute.params['value']['id'];

      this.solution = model.pages.portfolio.solutions.find(item => item.id === solutionId);
    }

    console.log(this.constructor.name, 'ngOnInit(), this.solution = ', this.solution);
  }

}
