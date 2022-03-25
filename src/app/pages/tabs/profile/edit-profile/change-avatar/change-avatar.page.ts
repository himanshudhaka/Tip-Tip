import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.page.html',
  styleUrls: ['./change-avatar.page.scss'],
})
export class ChangeAvatarPage implements OnInit {

  list = []

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 9; i++) {
      this.list.push(i+1)
    }
  }

}
