import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, transition, group, query, style, animate } from '@angular/animations';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  animations:[
    trigger('routeAnimation', [
      transition('1 => 2', [
        style({ height: '!'}),
        query(':enter', style({ transform: 'translateX(100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}))]),
        ])
      ]),
      transition('2 => 1', [
        style({ height: '!'}),
        query(':enter', style({ transform: 'translateX(-100%)'})),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0})),
        group([
          query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)'}))]),
          query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)'}))]),
        ])
      ]),
    ])
  ]
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getDepth(outlet){
    return outlet.activatedRouteData['depth'];
  }

}
