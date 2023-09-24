import {Component, HostListener, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Timeline');
    this.metaService.addTags([
      {name: 'keywords', content: 'Développeur, Cédric Leroy, cedric Leroy, timeline, parcours, formation, TypeScript'},
      {name: 'description', content: "Timeline de mon parcours de développeur orienté TypeScript"},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
  events = [
    { year: "10/2023", description: "Entrée au sein de l'incubateur numérique d'Euratechnologies" },
    { year: "07/2023", description: "Diplômé Concepteur Développeur d'Applications" },
    { year: "10/2022", description: "Entrée en formation Concepteur Développeur d'Applications"},
    { year: "03/2022", description: "Découverte du développement web et complétion du CS50"},
    { year: "10/2021", description: "Psychologue clinicien pour les groupes Korian et Fondation Partage & Vie" },
    { year: "09/2022", description: "Obtention du Master PCPA de l'Université de Lille et du titre de psychologue clinicien"},
    { year: "09/2016", description: "Entrée à l'Université de Lille Licence de Psychologie"},
    { year: "09/2015", description: "1ère année de Médecine P.A.C.E.S."},
    { year: "09/2015", description: "Obtention du baccalauréat Scientifique mention bien"},
  ];

}
