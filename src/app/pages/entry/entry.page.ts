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

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getByUID({name: 'aa', uid: this.logDeviceInfo()})
    .subscribe((res) => {
      console.log(res);
      if(res != null) {
        this.loading = true
        this.apiService.loginByUID({name: 'aa', uid: this.logDeviceInfo()}).subscribe(() => {
          this.router.navigateByUrl('/tabs', {replaceUrl: true})
        }).add(() => this.loading = false)
      }
    }).add(() => this.loading = false)
  }

  logDeviceInfo = async () => {
    const info = await Device.getInfo();
    const id = await Device.getId()
    console.log(info, id);
    return id
  };
}
