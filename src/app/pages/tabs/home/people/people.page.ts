import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  wanted = false
  tipoff = {showMore: false}
  people = [
    {
      id: 1,
      name: 'John Doe',
      reward: 5000,
      photo: 'stealing-car.jpg'
    },
    {
      id: 2,
      name: 'Babu',
      reward: 90000,
      photo: 'stealing-car.jpg'
    },
    {
      id: 3,
      name: 'Dawood',
      reward: 100000,
      photo: 'stealing-car.jpg'
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.router.url.includes('wanted')) this.wanted = true
  }

}
