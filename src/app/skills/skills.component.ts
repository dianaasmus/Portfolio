import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  iconData = [
    { src: '../../assets/img/icons/html-icon.png', alt: 'HTML' },
    { src: '../../assets/img/icons/css-icon.png', alt: 'CSS' },
    { src: '../../assets/img/icons/javascript-icon.png', alt: 'javascript' },
    { src: '../../assets/img/icons/api-icon.png', alt: 'api' },
    { src: '../../assets/img/icons/material-d-icon.png', alt: 'material-d' },
    { src: '../../assets/img/icons/git-icon.png', alt: 'git' },
    { src: '../../assets/img/icons/scrum-icon.png', alt: 'scrum' },
    { src: '../../assets/img/icons/angular-icon.png', alt: 'angular' },
    { src: '../../assets/img/icons/typescript-icon.png', alt: 'typescript' },
    { src: '../../assets/img/icons/firebase-icon.png', alt: 'firebase' },
    { src: '../../assets/img/icons/wordpress-icon.png', alt: 'wordpress' },
  ];

}