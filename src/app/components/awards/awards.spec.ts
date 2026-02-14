import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsComponent } from './awards';

describe('Awards', () => {
  let component: AwardsComponent;
  let fixture: ComponentFixture<AwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AwardsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
