import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalButtonsComponent } from './terminal-buttons.component';

describe('TerminalButtonsComponent', () => {
  let component: TerminalButtonsComponent;
  let fixture: ComponentFixture<TerminalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
