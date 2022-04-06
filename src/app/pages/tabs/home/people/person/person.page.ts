import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  person = {
    name: 'Babu',
    photo: 'babu.jpg',
    description: 'Babu is a hardened criminal with 4 muder cases on him, do not approach directly, was last seen at...',
    reward: 90000,
  }

  states = [ 'Andhra Pradesh',
                'Arunachal Pradesh',
                'Assam',
                'Bihar',
                'Chhattisgarh',
                'Goa',
                'Gujarat',
                'Haryana',
                'Himachal Pradesh',
                'Jammu and Kashmir',
                'Jharkhand',
                'Karnataka',
                'Kerala',
                'Madhya Pradesh',
                'Maharashtra',
                'Manipur',
                'Meghalaya',
                'Mizoram',
                'Nagaland',
                'Odisha',
                'Punjab',
                'Rajasthan',
                'Sikkim',
                'Tamil Nadu',
                'Telangana',
                'Tripura',
                'Uttarakhand',
                'Uttar Pradesh',
                'West Bengal',
                'Andaman and Nicobar Islands',
                'Chandigarh',
                'Dadra and Nagar Haveli',
                'Daman and Diu',
                'Delhi',
                'Lakshadweep',
                'Puducherry'];

  constructor() { }

  ngOnInit() {
  }

}
