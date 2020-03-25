import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-four',
  templateUrl: './grid-four.component.html'
})
export class GridFourComponent implements OnInit {

  @Input() slides;

  constructor(private router: Router, private route: ActivatedRoute) { }

  onSelect(slide) {
    this.router.navigate([slide.baseUrl, slide.id]);
    // this.router.navigate([ slide.id ], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
