import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
// import { Router, Event as RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  // (scroll)="onWindowScroll($event);"
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //     console.log('SCROLL: ' + e);
  //     console.log('CURRENT ROUTE: ' + this.currentRoute);
  //     const element = document.querySelector('.main-header');
  //     if (this.currentRoute === '/') {
  //       if (window.pageYOffset > element.clientHeight) {
  //         element.classList.add('sticky');
  //         element.classList.add('color-block');
  //       } else {
  //         element.classList.remove('sticky');
  //         element.classList.remove('color-block');
  //       }
  //     }
  //   }

  // constructor(private router: Router) {
  //   router.events.subscribe((routeInstance) => {
  //       if (routeInstance instanceof NavigationEnd) {
  //         if (routeInstance.url === '/') {
  //           this.currentRoute = routeInstance.url;
  //         }
  //       }
  //   });
  // }

  // AfterViewInit() {
  //   const element = document.querySelector('.main-header');
  //   if (this.currentRoute === '/') {
  //       element.classList.remove('color-block');
  //       console.log('success');
  //   }
  // }

  ngOnInit() {

  }
}
