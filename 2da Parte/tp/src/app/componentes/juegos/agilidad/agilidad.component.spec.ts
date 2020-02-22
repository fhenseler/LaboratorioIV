import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgilidadComponent } from './agilidad.component';

describe('AgilidadComponent', () => {
  let component: AgilidadComponent;
  let fixture: ComponentFixture<AgilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
