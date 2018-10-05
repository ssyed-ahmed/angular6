import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { LogsComponent } from 'src/app/logs/logs.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { StatisticsComponent } from 'src/app/statistics/statistics.component';
import { HeroDetailGeneralComponent } from 'src/app/hero-detail-general/hero-detail-general.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'heroes/:id/:fromState', component: HeroDetailComponent },
  {
    path: 'heroes',
    children: [
      {
        path: ':id/:fromState',
        component: HeroDetailComponent
      }
    ]
  },
  { path: 'logs', component: LogsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '', redirectTo: '/statistics', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { 
  
}
