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

  skills = [
    {
      "name": "Frontend",
      "skills": [
        {
          "type": "Typescript",
          "path": "/icons/skills/JavaScript.png"
        },
        {
          "type": "Javascript",
          "path": "/icons/skills/ts-logo-128.png"
        },
        {
          "type": "React",
          "path": "/icons/skills/React-icon.png"
        },
        {
          "type": "Angular",
          "path": "/icons/skills/angular.png"
        },
        {
          "type": "Next.js",
          "path": "/icons/skills/next.webp"
        },
        {
          "type": "tailwind",
          "path": "/icons/skills/tailwind.svg"
        }
      ]
    },    
    {
      "name": "Backend",
      "skills": [
        {
          "type": ".Net",
          "path": "/icons/skills/NET.svg"
        },
        {
          "type": "Node.js",
          "path": "/icons/skills/jsIconGreen.svg"
        },
        {
          "type": "Flask",
          "path": "/icons/skills/React-icon.png"
        },
        {
          "type": "ASP.NET",
          "path": "/icons/skills/NET.svg"
        },
        {
          "type": "PostgresSQL",
          "path": "/icons/skills/postgres.png"
        },
        {
          "type": "MongoDB",
          "path": "/icons/skills/MongoDB.svg"
        }
      ]
    },
    {
      "name": "cybersecurity",
      "skills": []
    },
    {
      "name": "Tools",
      "skills": []
    }

  ]

  projects = [
    {
      "num": "1",
      "name": "Fredo",
      "desc": "This is a keylogger malware written in rust. ",
      "skills": ['Rust', 'Python', 'Keylogging', 'Python', 'Flask'],
      "github_link": "https://github.com/Biboy-al/Fredo"
    },

    {
      "num": "2",
      "name": "Malware",
      "desc": "",
      "skills": ['Rust', 'Python', 'Keylogging'],
      "github_link": ""
    }
  ]
}
