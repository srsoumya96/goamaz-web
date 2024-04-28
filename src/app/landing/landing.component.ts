import { Component } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  ngOnInit() {
    AOS.init();
  }

  items = [
    { header: 'Empowering Healthcare, Through Innovative Software Solutions.', image_src: 'assets/images/landing-main-image-1.png' },
    { header: 'Enhance data management with secure, scalable, and compliant cloud hosting.', image_src: 'assets/images/landing-main-image-2.png' },
    { header: 'Maximize efficiency and effectiveness in healthcare operations with strategic IT guidance.', image_src: 'assets/images/landing-main-image-3.png' },
    { header: 'Empower your online presence with our expert web design and development', image_src: 'assets/images/landing-main-image-4.png' }
  ];
}
