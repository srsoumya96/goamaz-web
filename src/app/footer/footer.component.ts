import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router : Router) {}

  navigateTo(path : string) {
    this.router.navigate([path]);
    window.scrollTo(0,0);
  }

}
