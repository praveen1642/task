import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})


export class HomeComponent implements OnInit {
  modal = 'modal';
  modal1= 'modal';
  feedBackModal = 'modal';
  model: any;
  // public value :any;
  ngOnInit(): void {
    // this.value = new Date('1/1/2020');
    // console.log(this.value);
    
    // this.detailData.push({taking:"A very long title that spans more than one line of text",eventType:'Webiner' ,creator:'event Maker' , feedbackStatus:{text:'Only 10 hours left!', color:'#ffcc00'},evtHapBet:{start:'20:30 Mon 21 Sep,2021',end:'12:30 Tue 22 Sep,2021'},action:{board:true,post:true,edit:true,delete:true}});
  }
  
  detailData: any = [];
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
      taking: 'A very long title that spans more than one line of text',
      eventType: 'Sprint Planing',
      creator: 'Ishtiaq mahmood Amin',
      feedbackStatus: { text: 'Only 10 hours left!', color: '#ffcc00' },
      evtHapBet: {
        start: '20:30 Mon 21 Sep,2021',
        end: '12:30 Tue 22 Sep,2021',
      },
      action: { board: true, post: true, edit: true, delete: true },
    },
    {
      taking: 'This used to be all CAPS',
      eventType: 'Conference',
      creator: 'Ishtiaq mahmood Amin',
      feedbackStatus: { text: 'Only 10 minutes left!', color: '#bb2124' },
      evtHapBet: {
        start: '20:30 Mon 21 Sep,2021',
        end: '12:30 Tue 22 Sep,2021',
      },
      action: { board: true, post: true, edit: true, delete: true },
    },
    {
      taking:
        'Now name fields allow to accurately reflect what was typed, e.g. Microsoft.Net, RubyOnRails, etc',
      eventType: 'Seminar',
      creator: 'event Maker',
      feedbackStatus: { text: 'Done ,was active for 2hours', color: '#339900' },
      evtHapBet: {
        start: '20:30 Mon 21 Sep,2021',
        end: '12:30 Tue 22 Sep,2021',
      },
      action: { board: true, post: true, edit: true, delete: true },
    },
  ];
  isDetailOpen = false;

  handleOpenDetail(data: any) {
    this.isDetailOpen = true;
    this.detailData.push(data);
  }
  handleReturnHome(event: boolean) {
    this.isDetailOpen = event;
  }

  openModal(inp: string) {
    this.modal = 'modal-open';
  }

  closeModal() {
    this.modal = 'modal';
  }
  openModals(inp: string) {
    console.log(inp);
    this.modal1 = 'modal-open';
  }
  handleOpenFeedBack() {
    this.feedBackModal = 'modal-open';
  }
}
