import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  trustScore = 10;
  uuid: any

  constructor() { }

  ngOnInit() {
    this.logDeviceInfo();
  }

  logDeviceInfo () {
    Device.getId().then(x => this.uuid = x.uuid)
  }

}
