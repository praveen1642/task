import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { JoyMeterDetailsComponent } from './components/joy-meter-details/joy-meter-details.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { Feedback2Component } from './components/feedback2/feedback2.component';
import { Feedback3Component } from './components/feedback3/feedback3.component';
import { Feedback4Component } from './components/feedback4/feedback4.component';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsComponent } from './charts/charts.component';
import { AgChartsAngularModule } from 'ag-charts-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BoardComponent,
    JoyMeterDetailsComponent,
    FeedbackComponent,
    Feedback2Component,
    Feedback3Component,
    Feedback4Component,
    PersonalDashboardComponent,
    ChartComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgChartsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
