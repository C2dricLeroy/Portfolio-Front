import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private router: Router, private metaService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('About');
    this.metaService.addTags([
      {name: 'keywords', content: 'Développeur, Cédric Leroy, Cedric Leroy, TypeScript, about, à propos'},
      {name: 'description', content: "Page de transition du portfolio TypeScript, lien vers C.V. et timeline"},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

  navigateTo(path: string) {
    this.router.navigate([`/about/${path}`]);
  }
}
