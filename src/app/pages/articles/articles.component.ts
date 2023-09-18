import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Projets');
    this.metaService.addTags([
      {name: 'keywords', content: 'Développeur, Cédric Leroy, Cedric Leroy, TypeScript, articles'},
      {name: 'description', content: "Cette page regroupe l'ensemble de mes projets et réalisations, orienté TypeScript"},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

}
