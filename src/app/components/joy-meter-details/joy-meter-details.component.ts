import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-joy-meter-details',
  templateUrl: './joy-meter-details.component.html',
  styleUrls: ['./joy-meter-details.component.scss'],
})
export class JoyMeterDetailsComponent {
  @Input() detailData: any;
  @Output() returnHome: EventEmitter<any> = new EventEmitter<Boolean>();
  userData = [
    { name: 'Karla Sevensson' },
    { name: 'Toni Kroos' },
    { name: 'Mat Hummels' },
    { name: 'Jack Schnider' },
    { name: 'Peter Bjorn' },
    { name: 'Jack Schnider' },
    { name: 'Toni Kroos' },
    { name: 'Mat Hummels' },
    { name: 'Jack Schnider' },
    { name: 'Peter Bjorn' },
  ];
  handlOpenPostModal() {}
  handleReturnHome() {
    this.returnHome.emit(false);
  }
}
