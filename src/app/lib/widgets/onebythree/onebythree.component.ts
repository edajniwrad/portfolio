import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onebythree',
  templateUrl: './onebythree.component.html',
  styleUrls: ['./onebythree.component.scss']
})
export class OnebythreeComponent implements OnInit {
  @Input() slides;

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  onSelect(slide) {
    this.router.navigate([slide.baseUrl, slide.id]);
    // this.router.navigate([ slide.id ], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
