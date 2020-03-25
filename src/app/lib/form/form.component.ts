import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../service/portfolio.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cvdetails: any = {};
  private url: any = '/assets/data/profile.json';

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.service.get(this.url)
    .subscribe(data => this.cvdetails = data);
  }

}
