import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickeaComponent } from './clickea.component';

describe('ClickeaComponent', () => {
  let component: ClickeaComponent;
  let fixture: ComponentFixture<ClickeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
