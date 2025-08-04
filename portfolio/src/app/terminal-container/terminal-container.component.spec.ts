import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalContainerComponent } from './terminal-container.component';

describe('TerminalContainerComponent', () => {
  let component: TerminalContainerComponent;
  let fixture: ComponentFixture<TerminalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
