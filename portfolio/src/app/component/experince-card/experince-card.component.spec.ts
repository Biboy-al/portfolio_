import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperinceCardComponent } from './experince-card.component';

describe('ExperinceCardComponent', () => {
  let component: ExperinceCardComponent;
  let fixture: ComponentFixture<ExperinceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperinceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperinceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
