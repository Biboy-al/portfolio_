import { Component, input } from '@angular/core';
import { TerminalButtonsComponent } from '../component/terminal-buttons/terminal-buttons.component';

@Component({
  selector: 'app-terminal-container',
  imports: [TerminalButtonsComponent],
  templateUrl: './terminal-container.component.html',
  styleUrl: './terminal-container.component.scss'
})
export class TerminalContainerComponent {
  header = input<string>();
  cmd = input<string>();
}
