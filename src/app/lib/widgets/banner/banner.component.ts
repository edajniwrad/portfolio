import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() slides;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    arrows: false,
    cssEase: 'linear'
  };

  constructor() { }

  ngOnInit() {
  }

}
