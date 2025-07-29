import { Component } from '@angular/core';
import { AboutMeComponent } from '../../component/about-me/about-me.component';
import { SkillsContainerComponent } from '../../component/skills-container/skills-container.component';
import { ProjectContainerComponent } from '../../component/project-container/project-container.component';

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, SkillsContainerComponent, ProjectContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
