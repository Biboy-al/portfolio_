import { Component, Input, input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { SkillChipComponent } from '../skill-chip/skill-chip.component';

@Component({
  selector: 'app-project-container',
  imports: [SkillChipComponent],
  templateUrl: './project-container.component.html',
  styleUrl: './project-container.component.scss'
})
export class ProjectContainerComponent {
  num = input<string>();
  projectName = input<string>();
  desc = input<string>();
  @Input() skills: string[] = [];
  github_link = input<string>();

}
