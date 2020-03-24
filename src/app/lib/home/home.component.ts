import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortfolioService } from '../../service/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public banners = [];
  private url: any = '/assets/data/banners.json';
  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.service.get(this.url)
    .subscribe(data => this.banners = data);
  }
}
