import { Component } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  address = [
    {
      city : 'Kolkata',
      address : '1/C Sastitala Road, Narkel Danga,  Kolkata 700011, West Bengal',
      mapUrl : 'https://maps.app.goo.gl/gFagNFpTiGt8vkt79'
    },
    {
      city : 'Udaipur',
      address : 'B-10/3 Dariba B, Mahenduriya Railmarg, Udaipur 313211, Rajasthan',
      mapUrl : 'https://maps.app.goo.gl/1piXPjgjxXP8RBzL6'
    },
    {
      city : 'Indore',
      address : '128-129, Pu-4, Scheme No. 54, Behind C21 Mall, Vijay Nagar, Indore 452010, Madhya Pradesh',
      mapUrl : 'https://maps.app.goo.gl/1piXPjgjxXP8RBzL6'
    }
  ];
  ngOnInit() {
    AOS.init();

  }

}
