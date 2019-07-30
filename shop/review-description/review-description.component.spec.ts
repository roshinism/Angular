import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDescriptionComponent } from './review-description.component';

describe('ReviewDescriptionComponent', () => {
  let component: ReviewDescriptionComponent;
  let fixture: ComponentFixture<ReviewDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
