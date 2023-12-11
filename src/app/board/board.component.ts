import { Component } from '@angular/core';

import { AgChartOptions, AgCharts } from 'ag-charts-enterprise';
import 'ag-charts-enterprise';

import { getData } from './data';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  public options: AgChartOptions;
  data = [
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo eaque, excepturi autem qui molestiae magni? Hic iste eum esse nihil itaque quae amet, quisquam omnis, molestiae cumque, ratione consectetur!',
      name: 'Patty Carry',
      head: 'Disapointed',
      icon: 'fa-regular fa-thumbs-down',
      color: '#c55c5c',
      team: 'Team A',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo eaque, excepturi autem qui molestiae magni? Hic iste eum esse nihil itaque quae amet, quisquam omnis, molestiae cumque, ratione consectetur!',
      head: 'Disapointed',
      icon: 'fa-regular fa-thumbs-down',
      color: '#c55c5c',
      name: 'Anonymous',
      team: 'Team B',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo eaque, excepturi autem qui molestiae magni? Hic iste eum esse nihil itaque quae amet, quisquam omnis, molestiae cumque, ratione consectetur!',
      name: 'Patty Carry',
      head: 'Very happy',
      icon: 'fa-brands fa-gratipay',
      color: '#00CCFF',
      team: 'Team A',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo eaque, excepturi autem qui molestiae magni? Hic iste eum esse nihil itaque quae amet, quisquam omnis, molestiae cumque, ratione consectetur!',
      head: 'Very Happy',
      color: '#00CCFF',
      icon: 'fa-brands fa-gratipay',
      name: 'Anonymous',
      team: 'Team A',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo eaque, excepturi autem qui molestiae magni? Hic iste eum esse nihil itaque quae amet, quisquam omnis, molestiae cumque, ratione consectetur!',
      name: 'Patty',
      head: 'Possitive',
      color: '#008000',
      icon: 'fa-regular fa-thumbs-up',
      team: 'Team A',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo eaque, excepturi autem qui molestiae magni? Hic iste eum esse nihil itaque quae amet, quisquam omnis, molestiae cumque, ratione consectetur!',
      name: 'Patty Carry',
      head: 'Could be better',
      icon: 'fa-regular fa-heart',
      team: 'Team A',
      color:'#72A0C1'
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo eaque, excepturi autem qui molestiae magni? Hic iste eum esse nihil itaque quae amet, quisquam omnis, molestiae cumque, ratione consectetur!',
      name: 'Patty Carry',
      head: 'That was Awsome',
      icon: 'fa-regular fa-thumbs-up',
      team: 'Team A',
      color:'#FEBE10'
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo eaque, excepturi autem qui molestiae magni? Hic iste eum esse nihil itaque quae amet, quisquam omnis, molestiae cumque, ratione consectetur!',
      name: 'Carry',
      head: 'That was Awsome',
      icon: 'fa-regular fa-gratipay',
      team: 'Team A',
      color:'#FEBE10'
    },
  ];
  constructor() {
    this.options = {
      data: getData(),
      title: {
        text: 'Revenue by Product Category',
      },
      subtitle: {
        text: 'Millions USD',
      },
      series: [
        {
          type: 'radial-bar',
          radiusKey: 'quarter',
          angleKey: 'software',
          angleName: 'Software',
        },
        {
          type: 'radial-bar',
          radiusKey: 'quarter',
          angleKey: 'hardware',
          angleName: 'Hardware',
        },
        {
          type: 'radial-bar',
          radiusKey: 'quarter',
          angleKey: 'services',
          angleName: 'Services',
        },
      ],
      axes: [
        {
          type: 'angle-number',
        },
        {
          type: 'radius-category',
          innerRadiusRatio: 0.3,
        },
      ],
    };
  }
}
