import { Component, input } from '@angular/core';

@Component({
  selector: 'app-terminal-container',
  imports: [],
  templateUrl: './terminal-container.component.html',
  styleUrl: './terminal-container.component.scss'
})
export class TerminalContainerComponent {
  header = input<string>();
  cmd = input<string>();
}
