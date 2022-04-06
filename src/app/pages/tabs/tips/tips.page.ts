import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  showMore = false

  tipoffs = [
    {
      type: 'Robbery',
      knowledge: 'Witnessed',
      state: 'Occurred',
      location: 'India Gate, Sitapura, Jaipur, 302022',
      time: '04:00 AM, 25th Mar 2022',
      description: 'I saw a vehicle getting broken into and noted the number of the car: RJ30 CA 8055. The person stealing was of avg height and build, wearing a blue T-shirt and white jeans.',
      media: 'stealing-car.jpg',
      trustscore: 0,
      showMore: false
    },
    {
      type: 'Murder',
      knowledge: 'Aware of planning',
      state: 'Will Occur',
      location: 'India Gate, Sitapura, Jaipur, 302022',
      time: '04:00 PM, 26th Mar 2022',
      description: 'I heard someone talking about murdering someone near India Gate, they were talking about carrying out their plan.',
      // media: 'stealing-car.jpg',
      trustscore: -10,
      showMore: false
    },
    {
      type: 'Domestic Violence',
      knowledge: 'Witnessed',
      state: 'Occurring',
      location: 'India Gate, Sitapura, Jaipur, 302022',
      time: '09:00 PM, 25th Mar 2022',
      description: 'There is domestic violence going on right now in the provided address',
      media: 'domestic-violence.jpg',
      trustscore: 50,
      showMore: false
    },
  ]

  constructor(
    // private formBuilder: FormBuilder,
    private apiService: ApiService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getTips()
  }

  async getTips() {
    const loading = await this.loadingController.create()
    await loading.present()
    this.apiService.getTips().subscribe((res: any) => {
      console.log(res);

    }).add(() => loading.dismiss())
  }
}
