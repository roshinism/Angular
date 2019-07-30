import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Useservice2Component } from './useservice2.component';

describe('Useservice2Component', () => {
  let component: Useservice2Component;
  let fixture: ComponentFixture<Useservice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Useservice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Useservice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
