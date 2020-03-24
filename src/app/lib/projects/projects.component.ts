import { ProjectsService } from './../../service/projects.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public slides = [];
  constructor(private projectService: ProjectsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectService.getProjectList()
    .subscribe(data => this.slides = data);
  }
}
