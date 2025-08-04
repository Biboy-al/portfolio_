import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-project-container',
  imports: [],
  templateUrl: './project-container.component.html',
  styleUrl: './project-container.component.scss'
})
export class ProjectContainerComponent {
  header = input<string>();
}
