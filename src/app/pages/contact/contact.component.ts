import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Contact');
    this.metaService.addTags([
      {name: 'keywords', content: 'Développeur, Cédric Leroy, TypeScript'},
      {name: 'description', content: "Page de contact de mon portfolio"},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
