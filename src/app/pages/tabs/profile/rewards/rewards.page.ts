import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  tipoffs = [
    {
      type: 'Missing Person',
      knowledge: 'Witnessed',
      location: 'India Gate, Sitapura, Jaipur, 302022',
      time: '04:00 AM, 25th Mar 2022',
      description: 'I saw a vehicle getting broken into and noted the number of the car: RJ30 CA 8055. The person stealing was of avg height and build, wearing a blue T-shirt and white jeans.',
      media: 'stealing-car.jpg',
      reward: 5000
    },

  ]
  uuid: any

  constructor() { }

  ngOnInit() {
    this.logDeviceInfo();
  }

  logDeviceInfo () {
    Device.getId().then(x => this.uuid = x.uuid)
  };
}
