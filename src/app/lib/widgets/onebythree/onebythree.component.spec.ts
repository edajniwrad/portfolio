import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnebythreeComponent } from './onebythree.component';

describe('OnebythreeComponent', () => {
  let component: OnebythreeComponent;
  let fixture: ComponentFixture<OnebythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnebythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnebythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
