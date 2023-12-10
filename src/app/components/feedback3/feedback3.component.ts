import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback3',
  templateUrl: './feedback3.component.html',
  styleUrls: ['./feedback3.component.scss']
})
export class Feedback3Component {
  feedBacks = [
    { name: 'Angry', bgColor: '#ff0000' },
    { name: 'Scared', bgColor: '#ff0000' },
    { name: 'Sad', bgColor: '#ff0000' },
    { name: 'Quiet', bgColor: '#ff7400' },
    { name: 'Frustrated', bgColor: '#ff7400' },
    { name: 'Bored', bgColor: '#ff7400' },
    { name: 'Cool', bgColor: '#ffc100' },
    { name: 'Excited', bgColor: '#ff7400' },
    { name: 'Happy', bgColor: '#ffc100' },
  ];
}
