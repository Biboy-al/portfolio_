import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  name = input<string>();
  path = input<string>();
}
