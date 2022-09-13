import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  trustScore = 10;
  uuid: any
  loading = false

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.logDeviceInfo();
  }

  logDeviceInfo () {
    Device.getId().then(x => this.uuid = x.uuid)
  }

  logout() {
    this.loading = true
    this.apiService.logout().add(() => this.loading = false)
  }
}
