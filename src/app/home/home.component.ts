import { Component , OnInit} from '@angular/core';

declare const $ : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  modal = 'modal';
  joyMeterData = [
    {
      taking: 'Name of the Event',
      eventType: 'Webiner',
      creator: 'event Maker',
      feedbackStatus: { text: '2 days remaining', color: '#36e0e0' },
      evtHapBet: {
        start: '20:30 Mon 21 Sep,2021',
        end: '12:30 Tue 22 Sep,2021',
      },
      action: { board: true, post: true, edit: true, delete: true },
    },
    {
      taking: 'Name of the Event',
      eventType: 'Webiner',
      creator: 'event Maker',
      feedbackStatus: { text: 'Only 10 hours left!', color: '#ffcc00' },
      evtHapBet: {
        start: '20:30 Mon 21 Sep,2021',
        end: '12:30 Tue 22 Sep,2021',
      },
      action: { board: true, post: true, edit: true, delete: true },
    },
    {
      taking: 'Name of the Event',
      eventType: 'Webiner',
      creator: 'event Maker',
      feedbackStatus: { text: 'Only 10 minutes left!', color: '#bb2124' },
      evtHapBet: {
        start: '20:30 Mon 21 Sep,2021',
        end: '12:30 Tue 22 Sep,2021',
      },
      action: { board: true, post: true, edit: true, delete: true },
    },
    {
      taking: 'Name of the Event',
      eventType: 'Webiner',
      creator: 'event Maker',
      feedbackStatus: { text: 'Done ,was active for 2hours', color: '#339900' },
      evtHapBet: {
        start: '20:30 Mon 21 Sep,2021',
        end: '12:30 Tue 22 Sep,2021',
      },
      action: { board: true, post: true, edit: true, delete: true },
    },
  ];

  ngOnInit(): void {
  
  }
  openModal(inp: string) {
    console.log(inp);
    this.modal = 'modal-open';
  }

  closeModal() {
    this.modal = 'modal';
  }
}
