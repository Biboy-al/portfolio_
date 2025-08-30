import { Component } from '@angular/core';
import { AboutMeComponent } from '../../component/about-me/about-me.component';
import { SkillsContainerComponent } from '../../component/skills-container/skills-container.component';
import { ProjectContainerComponent } from '../../component/project-container/project-container.component';
import { TerminalContainerComponent } from '../../component/terminal-container/terminal-container.component';
import {MatButtonModule} from '@angular/material/button';
import { ContactCardComponent } from "../../component/contact-card/contact-card.component";
import { ExperinceCardComponent } from "../../component/experince-card/experince-card.component";

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, SkillsContainerComponent, ProjectContainerComponent, SkillsContainerComponent, TerminalContainerComponent, MatButtonModule, ContactCardComponent, ExperinceCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  progSkills =[
    {
      "name": "Programming Skills",
      "skills":[
          {
            "type": "Typescript",
            "path": "/icons/skills/JavaScript.png"
          },
          {
            "type": "Javascript",
            "path": "/icons/skills/ts-logo-128.png"
          },
          {
            "type": "C",
            "path": "/icons/skills/C_Logo.png"
          },
          {
            "type": "C++",
            "path": "/icons/skills/C++.png"
          },
          {
            "type": "C#",
            "path": "/icons/skills/C.png"
          },
          {
            "type": "Java",
            "path": "/icons/skills/java.png"
          },
          {
            "type": "Python",
            "path": "/icons/skills/python.png"
          },
          {
            "type": "Rust",
            "path": "/icons/skills/rust.png"
          },
          {
            "type": "Ruby",
            "path": "/icons/skills/ruby.png"
          },
      ]
    }
  ]


  skills = [
    {
      "name": "Frontend",
      "skills": [
  
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
        },
        {
          "type": "SASS",
          "path": "/icons/skills/sass.png"
        }
      ]
    },    
    {
      "name": "Backend",
      "skills": [
        {
          "type": ".Net",
          "path": "/icons/skills/dotnet.png"
        },
        {
          "type": "Node.js",
          "path": "/icons/skills/jsIconGreen.svg"
        },
        {
          "type": "Flask",
          "path": "/icons/skills/python.png"
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
      "name": "Tools",
      "skills": [  
        {
        "type": "Git",
        "path": "/icons/skills/git.png"
      },
      {
        "type": "Docker",
        "path": "/icons/skills/docker.png"
      },
      {
        "type": "AWS",
        "path": "/icons/skills/aws.png"
      },
    
    ]
    },

    {
      "name": "AI & Machine Learning",
      "skills": [  
        {
        "type": "Tensorflow",
        "path": "/icons/skills/tensorflow.webp"
      },
      {
        "type": "PyTorch",
        "path": "/icons/skills/pyTorch.png"
      },
      {
        "type": "scikit-learn",
        "path": "/icons/skills/sci.png"
      },
    
    ]
    }

  ]

  projects = [
    {
      "num": "1",
      "name": "Portfolio Website",
      "desc": "Hey you're here right now!!! This is my personal portfolio website to showcases my skills, projects, thoughts and experinces. I built this using Angular and hosted it on Vercel. I've also used this as a way to learn more about CI/CD by implementing Github Actions for automated deployments.",
      "skills": ['Typescript', 'Angular', 'Vercel','SASS' ,'CI/CD', 'Github Actions'],
      "github_link": "https://github.com/Biboy-al/portfolio_"
    },
    {
      "num": "2",
      "name": "Fredo",
      "desc": "For the longest time I wanted to learn rust. What better way to learn it than to build a keylogger. Fredo is a windows keylogger built using Rust. It captures keystrokes and sends them to a Flask web server for easy monitoring.",
      "skills": ['Rust', 'Python', 'Keylogging', 'Python', 'Flask'],
      "github_link": "https://github.com/Biboy-al/Fredo"
    },

    {
      "num": "3",
      "name": "HomeSentinel",
      "desc": "Developed the backend functionality for a home security system using C# and .NET. Dockerized the application for seamless deployment and hosted it on GCP.",
      "skills": ['C#', '.NET', 'ASP.NET', 'Docker', 'GCP'],
      "github_link": "https://github.com/Minibunny14/HomeSentinel"
    }
  ]
}
