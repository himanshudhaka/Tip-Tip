import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tt = 0;
  rt = 0;
  ct = 0;
  ts = 0;
  // tt = 20;
  // rt = 5;
  // ct = 15;
  // ts = 65;

  constructor() { }

  ngOnInit() {
  }

}
