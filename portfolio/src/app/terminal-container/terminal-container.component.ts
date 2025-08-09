import { Component, input } from '@angular/core';
import { TerminalButtonsComponent } from '../component/terminal-buttons/terminal-buttons.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-terminal-container',
  imports: [TerminalButtonsComponent, DragDropModule],
  templateUrl: './terminal-container.component.html',
  styleUrl: './terminal-container.component.scss'
})
export class TerminalContainerComponent {
  header = input<string>();
  cmd = input<string>();
}
