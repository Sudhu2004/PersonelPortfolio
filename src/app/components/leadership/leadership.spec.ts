import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipComponent } from './leadership';

describe('Leadership', () => {
  let component: LeadershipComponent;
  let fixture: ComponentFixture<LeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LeadershipComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
