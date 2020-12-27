import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-over-period',
  templateUrl: './charts-over-period.component.html',
  styleUrls: ['./charts-over-period.component.scss']
})
export class ChartsOverPeriodComponent implements OnInit {

 dataSource: Object;
  constructor() {
    this.dataSource = {
      "chart": {
        "theme": "fusion",
        "caption": "Stock price",
        "subCaption": "Week",
        "xAxisName": "Date & Time",
        "yAxisName": "Price",
        "divlineColor": "#999999",
        "divLineIsDashed": "1",
        "labelDisplay":"Rotate",
        "rotateNames":"1"
      },
      "data": [{
        "label": "12/12/2019 10.23AM",
        "value": "5123"
      }, {
        "label": "12/12/2019 10.23AM",
        "value": "4233"
      }, {
        "label": "12/12/2019 10.23AM",
        "value": "5507"
      }, {
        "label": "12/12/2019 10.23AM",
        "value": "4110"
      }, {
        "label": "12/12/2019 10.23AM",
        "value": "5529"
      }, {
        "label": "12/12/2019 10.23AM",
        "value": "5803"
      }, {
        "label": "12/12/2019 10.23AM",
        "value": "6202"
      }]
    }
  } // end of constructor
  ngOnInit() {
  }

}
