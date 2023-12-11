import { Component,ViewChild } from '@angular/core';
import { AgChartsAngular } from 'ag-charts-angular';
import {
    AgBarSeriesOptions,
    AgCartesianAxisOptions,
    AgCartesianChartOptions,
    AgCartesianSeriesOptions,
    AgCartesianSeriesTooltipRendererParams,
    AgCharts,
    AgLineSeriesOptions,
} from 'ag-charts-community';

import { getData } from './data';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {   public options: AgCartesianChartOptions;

  @ViewChild(AgChartsAngular)
  public agCharts!: AgChartsAngular;

  constructor() {
      this.options = {
          data: getData(),
          title: {
            text: 'joy meter ',
          },
          series: BAR_AND_LINE,
          axes: [
              {
                  type: 'category',
                  position: 'bottom',
              },
              {
                  // primary y axis
                  type: 'number',
                  position: 'left',
                  keys: ['women', 'men', 'children', 'adults'],
                  title: {
                      text: 'joy meter ',
                  },
              },
              {
                  // secondary y axis
                  type: 'number',
                  position: 'right',
                  keys: ['portions'],
                  title: {
                    text: 'joy meter ',
                  },
              },
          ] as AgCartesianAxisOptions[],
      };
  }

  ngOnInit() {
      
  }

  barLine = () => {
      const options = { ...this.options };

      options.series = BAR_AND_LINE;

      this.options = options;
  };

  areaBar = () => {
      const options = { ...this.options };

      options.series = AREA_AND_BAR;

      this.options = options;
  };
}

function tooltipRenderer({ datum, xKey, yKey }: AgCartesianSeriesTooltipRendererParams) {
  return { content: `${datum[xKey]}: ${datum[yKey]}%` };
}
const WOMEN: AgBarSeriesOptions = {
  type: 'bar',
  xKey: 'year',
  yKey: 'Joymeter',
  yName: 'Joymeter',
  grouped: true,
  tooltip: {
      renderer: tooltipRenderer,
  },
};
const MEN: AgBarSeriesOptions = {
  type: 'bar',
  xKey: 'year',
  yKey: 'Joymeter',
  yName: 'Joymeter',
  grouped: true,
  tooltip: {
      renderer: tooltipRenderer,
  },
};
const PORTIONS: AgLineSeriesOptions = {
  type: 'line',
  xKey: 'year',
  yKey: 'portions',
  yName: 'Portions',
  tooltip: {
      renderer: tooltipRenderer,
  },
};
const BAR_AND_LINE: AgCartesianSeriesOptions[] = [
  { ...WOMEN, type: 'bar' },
  { ...MEN, type: 'bar' },
  { ...PORTIONS, type: 'line' },
];
const AREA_AND_BAR: AgCartesianSeriesOptions[] = [
  { ...PORTIONS, type: 'area' },
  { ...WOMEN, type: 'bar' },
  { ...MEN, type: 'bar' },
];
