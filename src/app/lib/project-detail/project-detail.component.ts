import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PortfolioService } from '../../service/portfolio.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  public currentId; details;
  private url: any = '/assets/data/projects.json';
  constructor(private service: PortfolioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    // this.projectId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 10);
      this.currentId = id;
    });

    this.service.get(this.url)
    .subscribe(data => this.details = data.filter(item => item.id === this.currentId)[0]);
  }

  // goPrevious() {
  //   const pid = this.currentId - 1;
  //   this.router.navigate(['/projects', pid]);
  //   this.projectService.getProjectList()
  //   .subscribe(data => this.slide = data.filter(item => item.id === this.currentId));
  // }

  // goNext() {
  //   const nid = this.currentId + 1;
  //   this.router.navigate(['/projects', nid]);
  //   this.projectService.getProjectList()
  //   .subscribe(data => this.slide = data.filter(item => item.id === this.currentId));
  // }
}
