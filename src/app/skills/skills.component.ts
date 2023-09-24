import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  iconData = [
    { src: '../../assets/img/icons/javascript-icon.png', alt: 'JavaScript' },
    { src: '../../assets/img/icons/css-icon.png', alt: 'CSS' },
    { src: '../../assets/img/icons/html-icon.png', alt: 'HTML' },
    { src: '../../assets/img/icons/api-icon.png', alt: 'Rest API' },
    { src: '../../assets/img/icons/material-d-icon.png', alt: 'Material Design' },
    { src: '../../assets/img/icons/git-icon.png', alt: 'GIT' },
    { src: '../../assets/img/icons/typescript-icon.png', alt: 'Typescript' },
    { src: '../../assets/img/icons/angular-icon.png', alt: 'Angular' },
    { src: '../../assets/img/icons/scrum-icon.png', alt: 'Scrum' },
    { src: '../../assets/img/icons/firebase-icon.png', alt: 'Firebase' },
    { src: '../../assets/img/icons/wordpress-icon.png', alt: 'Wordpress' },
  ];

}