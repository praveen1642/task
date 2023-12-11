import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';

import { AgChartOptions, AgCharts } from 'ag-charts-community';

import { getData } from './data';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  public options: AgChartOptions;

  constructor() {
      this.options = {
          title: {
              text: "Apple's Revenue by Product Category",
          },
          subtitle: {
              text: 'In Billion U.S. Dollars',
          },
          data: getData(),
          series: [
              {
                  type: 'bar',
                  xKey: 'quarter',
                  yKey: 'iphone',
                  yName: 'iPhone',
                  normalizedTo: 100,
                  stacked: true,
              },
              {
                  type: 'bar',
                  xKey: 'quarter',
                  yKey: 'mac',
                  yName: 'Mac',
                  normalizedTo: 100,
                  stacked: true,
              },
              {
                  type: 'bar',
                  xKey: 'quarter',
                  yKey: 'ipad',
                  yName: 'iPad',
                  normalizedTo: 100,
                  stacked: true,
              },
              {
                  type: 'bar',
                  xKey: 'quarter',
                  yKey: 'wearables',
                  yName: 'Wearables',
                  normalizedTo: 100,
                  stacked: true,
              },
              {
                  type: 'bar',
                  xKey: 'quarter',
                  yKey: 'services',
                  yName: 'Services',
                  normalizedTo: 100,
                  stacked: true,
              },
          ],
          axes: [
              {
                  type: 'number',
                  position: 'left',
                  label: {
                      formatter: (params) => Math.round(params.value) + '%',
                  },
              },
              {
                  type: 'category',
                  position: 'bottom',
              },
          ],
      };
  }
}