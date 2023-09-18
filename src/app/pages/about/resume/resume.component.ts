import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('C.V.');
    this.metaService.addTags([
      {name: 'keywords', content: 'Développeur, Cédric Leroy, TypeScript, Resume, C.V., Cedric Leroy'},
      {name: 'description', content: "Cette page regroupe l'ensemble de mes projets et réalisations, orienté TypeScript"},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
  technos: string[] = [
    'Nest.js',
    'Next.js',
    'Angular',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
    'PostGreSQL',
    'Prisma',
    'Git',
    'Docker',
    'AWS'
    ];





}
