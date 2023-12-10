import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback2',
  templateUrl: './feedback2.component.html',
  styleUrls: ['./feedback2.component.scss']
})
export class Feedback2Component {
  feedBacks = [
    { name: 'Happy', bgColor: '#ff0000' },
    { name: 'Peaceful', bgColor: '#ff0000' },
    { name: 'Hopeful', bgColor: '#ff0000' },
    { name: 'Anxious', bgColor: '#ff7400' },
    { name: 'Confused', bgColor: '#ff7400' },
    { name: 'Sad', bgColor: '#ff7400' },
    { name: 'Angry', bgColor: '#ffc100' },
  ];
}
