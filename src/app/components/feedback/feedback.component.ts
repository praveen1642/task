import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  feedBacks = [
    { name: 'tired', bgColor: '#ff0000' },
    { name: 'disappointed', bgColor: '#ff0000' },
    { name: 'down', bgColor: '#ff0000' },
    { name: 'positen', bgColor: '#ff7400' },
    { name: 'charmed', bgColor: '#ff7400' },
    { name: 'belonged', bgColor: '#ff7400' },
    { name: 'accomplished', bgColor: '#ffc100' },
    { name: 'very happy', bgColor: '#ffc100' },
    { name: 'thrilled', bgColor: '#ffc100' },
  ];
}
