import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  iconData = [
    { src: '../../assets/img/icons/html_css.png', alt: 'HTML/CSS' },
    { src: '../../assets/img/icons/javaScript.png', alt: 'JavaScript' },
    { src: '../../assets/img/icons/rest-api.png', alt: 'Rest API' },
    { src: '../../assets/img/icons/figma.png', alt: 'Figma' },
    { src: '../../assets/img/icons/git.png', alt: 'GIT' },
    { src: '../../assets/img/icons/scrum.png', alt: 'Scrum', style: 'height: 96px;' },
    { src: '../../assets/img/icons/angular.png', alt: 'Angular' },
    { src: '../../assets/img/icons/typescript.png', alt: 'TypeScript' },
    { src: '../../assets/img/icons/firebase.png', alt: 'Firebase' }
  ];
}
