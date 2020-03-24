import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public randomItem; id;

  skills = [{
    text: 'ANGULAR',
    subtext: '',
    class: ''
  }, {
    text: 'REACT',
    subtext: '',
    class: ''
  }, {
    text: 'VUE JS',
    subtext: '',
    class: ''
  }, {
    text: 'HTML',
    subtext: '',
    class: ''
  }, {
    text: 'CSS',
    subtext: '',
    class: ''
  }, {
    text: 'SCSS',
    subtext: '',
    class: ''
  }, {
    text: 'LESS',
    subtext: '',
    class: ''
  }, {
    text: 'NODE JS',
    subtext: '',
    class: ''
  }, {
    text: 'PHP',
    subtext: '',
    class: ''
  }, {
    text: 'Front-end Developer',
    subtext: '',
    class: ''
  }];

  battleInit() {
    this.randomItem = this.skills[Math.floor(Math.random() * this.skills.length)];
  }

  constructor() { }

  ngOnInit() {
    this.battleInit();
    this.id = setInterval(() => {
      this.battleInit();
    }, 5000);
  }

  OnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

}
