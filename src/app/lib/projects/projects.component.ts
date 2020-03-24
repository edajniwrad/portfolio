import { PortfolioService } from '../../service/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public slides = [];
  private url: any = '/assets/data/projects.json';
  constructor(private service: PortfolioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.get(this.url)
    .subscribe(data => this.slides = data);
  }
}
