import { Component } from '@angular/core';
import { AboutMeComponent } from '../../component/about-me/about-me.component';
import { SkillsContainerComponent } from '../../component/skills-container/skills-container.component';
import { ProjectContainerComponent } from '../../component/project-container/project-container.component';
import { TerminalContainerComponent } from '../../terminal-container/terminal-container.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, SkillsContainerComponent, ProjectContainerComponent, SkillsContainerComponent, TerminalContainerComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skills = ['Angular', 'TypeScript', 'Node.js'];
}
