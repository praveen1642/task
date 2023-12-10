import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyMeterDetailsComponent } from './joy-meter-details.component';

describe('JoyMeterDetailsComponent', () => {
  let component: JoyMeterDetailsComponent;
  let fixture: ComponentFixture<JoyMeterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoyMeterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoyMeterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
