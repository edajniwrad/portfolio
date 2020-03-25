import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../service/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public banners = []; slides = [];
  private projects: any = '/assets/data/projects.json';
  private url: any = '/assets/data/banners.json';
  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.service.get(this.url)
    .subscribe(data => this.banners = data);

    this.service.get(this.projects)
    .subscribe(data => this.slides = data);
  }
}
