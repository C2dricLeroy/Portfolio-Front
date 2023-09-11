import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-timeline',

  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent  {

  events = [
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
