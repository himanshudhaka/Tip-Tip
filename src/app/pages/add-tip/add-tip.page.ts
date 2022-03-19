import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.page.html',
  styleUrls: ['./add-tip.page.scss'],
})
export class AddTipPage implements OnInit {

  dateValue: string;
  userType: string;

  constructor() { }

  ngOnInit() {
  }

  formatDate(value: string) {
    console.log(value);
    return format(parseISO(value), 'hh:mm a, dd MMM yyyy');
  }
}
