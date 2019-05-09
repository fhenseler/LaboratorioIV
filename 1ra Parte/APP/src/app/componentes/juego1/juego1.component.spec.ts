import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego1Component } from './juego1.component';

describe('Juego1Component', () => {
  let component: Juego1Component;
  let fixture: ComponentFixture<Juego1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Juego1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Juego1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
