import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptainMarvelComponent } from './captain-marvel/captain-marvel.component';
import { DoctorStrangeComponent } from './doctor-strange/doctor-strange.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'doctor-strange', component: DoctorStrangeComponent },
  { path: 'captain-marvel', component: CaptainMarvelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
