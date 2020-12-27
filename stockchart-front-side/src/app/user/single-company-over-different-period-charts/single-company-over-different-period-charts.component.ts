import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-company-over-different-period-charts',
  templateUrl: './single-company-over-different-period-charts.component.html',
  styleUrls: ['./single-company-over-different-period-charts.component.scss']
})
export class SingleCompanyOverDifferentPeriodChartsComponent implements OnInit {

  dataSource: Object;
  list=[{0:"mon"},{1:"tue"}];
  labels = [];
  constructor() {
    this.list.map((x,i)=> {
      
      var label = {
        "label": x[i]
      }
      // console.log(label);
      this.labels.push(label);
    })
    console.log(this.labels)
    this.dataSource = {
      "chart": {
        "theme": "fusion",
        "caption": "Number of visitors last week",
        "subCaption": "Bakersfield Central vs Los Angeles Topanga",
        "xAxisName": "Day"
      },
      "categories": [{
        "category": [{
            "label": "Mon"
          },
          {
            "label": "Tue"
          },
          {
            "label": "Wed"
          },
          {
            "label": "Thu"
          },
          {
            "label": "Fri"
          },
          {
            "label": "Sat"
          },
          {
            "label": "Sun"
          }
        ]
      }],
      "dataset": [{
          "seriesname": "Bakersfield Central",
          "data": [{
              "value": "15123"
            },
            {
              "value": "14233"
            },
            {
              "value": "25507"
            },
            {
              "value": "9110"
            },
            {
              "value": "15529"
            },
            {
              "value": "20803"
            },
            {
              "value": "19202"
            }
          ]
        },
        {
          "seriesname": "Los Angeles Topanga",
          "data": [{
              "value": "13400"
            },
            {
              "value": "12800"
            },
            {
              "value": "22800"
            },
            {
              "value": "12400"
            },
            {
              "value": "15800"
            },
            {
              "value": "19800"
            },
            {
              "value": "21800"
            }
          ]
        }
      ],
      // "trendlines": [{
      //   "line": [{
      //     "startvalue": "17022",
      //     "color": "#62B58F",
      //     "valueOnRight": "1",
      //     "displayvalue": "Average"
      //   }]
      // }]
    }
    // end of datasource
  } // end of constructor

  ngOnInit() {
  }

}
