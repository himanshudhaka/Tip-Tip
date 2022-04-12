import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {

  loading = true
  uuid: any

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.logDeviceInfo()
    setTimeout(() => {
      console.log(this.uuid)
      this.apiService.getByUID({uid: this.uuid})
      .subscribe((res) => {
        console.log(res);
        console.log('awd');
        if(res != null) {
          this.loading = true

          this.apiService.loginByUID({uid: this.uuid}).subscribe(() => {
            this.router.navigateByUrl('/tabs', {replaceUrl: true})
          }).add(() => this.loading = false)
        }
        else {
          this.loading = false
        }
      })
    }, 500);
  }

  logDeviceInfo () {
    Device.getId().then(x => this.uuid = x.uuid)
  };
}
