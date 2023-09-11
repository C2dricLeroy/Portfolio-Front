import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(path: string) {
    this.router.navigate([`/about/${path}`]);
  }
}
