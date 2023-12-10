import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback4',
  templateUrl: './feedback4.component.html',
  styleUrls: ['./feedback4.component.scss']
})
export class Feedback4Component {
  feedBacks = [
    { name: 'Tired', bgColor: '#ff0000' },
    { name: 'Disappointed', bgColor: '#ff0000' },
    { name: 'Down', bgColor: '#ff0000' },
    { name: 'positive', bgColor: '#ff7400' },
    { name: 'Charmed', bgColor: '#ff7400' },
    { name: 'Belonged', bgColor: '#ff7400' },
    { name: 'Accomplished', bgColor: '#ffc100' },
    { name: 'Very happy', bgColor: '#ff7400' },
    { name: 'Thrilled', bgColor: '#ffc100' },
  ];
}
