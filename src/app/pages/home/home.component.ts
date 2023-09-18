import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Projets');
    this.metaService.addTags([
      {name: 'keywords', content: 'Développeur, Cédric Leroy, TypeScript'},
      {name: 'description', content: "Page d'accueil et homepage de mon portfolio orienté TypeScript"},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

}
