import { Component } from '@angular/core';
import { SkillChipComponent } from '../skill-chip/skill-chip.component';

@Component({
  selector: 'app-experince-card',
  imports: [SkillChipComponent],
  templateUrl: './experince-card.component.html',
  styleUrl: './experince-card.component.scss'
})
export class ExperinceCardComponent {

  skills = ["Typescript", "Next.js", "Python", "TensorFlow", "scikit-learn", "Tailwind CSS", "Git", "Supabase"];
}
