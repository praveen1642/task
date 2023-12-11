import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';

const routes: Routes = [
  {path:"" , component: HomeComponent },
  {path:"home" , component: HomeComponent },
  {path:"board" , component: BoardComponent },
  {path:"personaldashboard" , component: PersonalDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
