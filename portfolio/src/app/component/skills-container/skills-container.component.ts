import { Component, Input, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SkillCardComponent } from '../skill-card/skill-card.component';

@Component({
  selector: 'app-skills-container',
  imports: [MatCardModule, SkillCardComponent],
  templateUrl: './skills-container.component.html',
  styleUrl: './skills-container.component.scss'
})
export class SkillsContainerComponent {
  skillName = input<string>();
  @Input() skills: ({ type: string; path: string; })[] = [];
}
