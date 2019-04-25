import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickeaRapidoComponent } from './clickea-rapido.component';

describe('ClickeaRapidoComponent', () => {
  let component: ClickeaRapidoComponent;
  let fixture: ComponentFixture<ClickeaRapidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickeaRapidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickeaRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
