import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  person = {
    name: 'loefen',
    photo: 'stealing-car.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste consequuntur hic rem adipisci nihil eligendi, harum magni et! Quibusdam delectus quae odit animi debitis placeat dicta consectetur quasi consequuntur.',
    reward: 12038,
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
