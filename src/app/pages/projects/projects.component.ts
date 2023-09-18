import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      DateDebut: "06/2023",
      Name: 'Groovz',
      Description: 'Groovz est un projet de réseau social musical pour les utilisateurs de Spotify.',
      Technologies: ['Next.js', 'Nest.js', 'PostGreSQL', 'Prisma' ],
      URL: 'http://groovz.fr',
      Github: 'https://github.com/C2dricLeroy/groovz-front2',
      Statut: 'En cours',
    },
    {
      DateDebut: "01/2023",
      DateFin: "06/2023",
      Name: "Discord Simplon",
      Description: "Création d'un Discord communautaire pour le groupe Simplon. Automatisation de processus métiers au travers de bots.",
      Technologies: ['Angular', 'Nest.js', 'PostGreSQL', 'Prisma', 'Discord.js'],
      Statut: 'terminé'
    },
    {
      DateDebut: "09/2023",
      Name: "Framework Discord",
      Description: "Conception et développement d'un framework Discord d'entreprise.",
      Statut: 'en cours',
    }
  ]
}
