import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../service/portfolio.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html'
})
export class JobComponent implements OnInit {
  public jobs = [];
  private url: any = '/assets/data/jobs.json';

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.service.get(this.url)
    .subscribe(data => this.jobs = data);
  }

}
