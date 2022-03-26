import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Device } from '@capacitor/device';
import { ToastController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.page.html',
  styleUrls: ['./add-tip.page.scss'],
})
export class AddTipPage implements OnInit {

  dateValue: string;
  userType: string;
  states = [
    'Andhra Pradesh',
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
    'Puducherry'
  ];

  form: FormGroup
  loading = false
  img: string
  blob: Blob
  uuid: any


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.logDeviceInfo()
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      knowledge: ['', Validators.required],
      crime_state: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postal: ['', Validators.required],
      datetime: ['', Validators.required],
      description: ['', Validators.required],
      assessment: ['', Validators.required],
      user_id: ['']
    })
  }

  onSubmit() {
    console.log(this.form.value);

    if(this.form.invalid) return

    this.loading = true
    if(!this.apiService.userValue) {
      console.log(this.uuid);
      this.apiService.registerByUID({uid: this.uuid}).subscribe(() => {
        console.log(this.apiService.userValue);

        this.form.controls.user_id.setValue(this.apiService.userValue.id)
        console.log(this.form.value);

        this.apiService.addTipoff(this.form.value)
        .subscribe((tipoff: any) => {
          this.router.navigateByUrl('/tabs')
          console.log(tipoff);

          // if(this.blob) {
          //   const formData = new FormData()
          //   formData.append('img', this.blob)
          //   formData.append('id', tipoff.id);
          //   console.log(formData);

          //   this.apiService.addMedia(FormData).subscribe(() => {
          //     this.router.navigateByUrl('/tabs')
          //   })
          // }
        })
        .add(() => this.loading = false)
      })
    }
    else {
      this.form.controls.user_id.setValue(this.apiService.userValue.id)
      this.apiService.addTipoff(this.form.value)
        .subscribe((tipoff: any) => {
          this.router.navigateByUrl('/tabs')
          console.log(tipoff);
        })
        .add(() => this.loading = false)
    }
  }

  formatDate(value: string) {
    return format(parseISO(value), 'hh:mm:aa dd MMM yyyy');
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    });
    this.img = image.dataUrl;
    let response = await fetch(this.img);
    this.blob = await response.blob();
    console.log(this.blob);
  };

  logDeviceInfo () {
    Device.getId().then(x => this.uuid = x.uuid)
  };
}
