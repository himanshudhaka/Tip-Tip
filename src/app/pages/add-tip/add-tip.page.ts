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
  states = [ 'Andhra Pradesh',
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
                'Puducherry'];

  constructor() { }

  ngOnInit() {
  }

  formatDate(value: string) {
    console.log(value);
    return format(parseISO(value), 'hh:mm a, dd MMM yyyy');
  }
}
