import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-skill-chip',
  imports: [],
  templateUrl: './skill-chip.component.html',
  styleUrl: './skill-chip.component.scss'
})
export class SkillChipComponent {
  skill = input<string>();
}
