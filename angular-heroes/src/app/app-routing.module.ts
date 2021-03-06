import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { LogsComponent } from 'src/app/logs/logs.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { StatisticsComponent } from 'src/app/statistics/statistics.component';
import { HeroDetailGeneralComponent } from 'src/app/hero-detail-general/hero-detail-general.component';
import { HeroDetailStatsComponent } from 'src/app/hero-detail-stats/hero-detail-stats.component';
import { HeroDetailCrimessolvedStatsComponent } from 'src/app/hero-detail-crimessolved-stats/hero-detail-crimessolved-stats.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'heroes/:id/:fromState', component: HeroDetailComponent },
  {
    path: 'heroes/:id/:fromState',
    component: HeroDetailComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full'},
      {
        path: 'overview',
        component: HeroDetailGeneralComponent
      },
      {
        path: 'statistics',
        component: HeroDetailStatsComponent
      },
      {
        path: 'crimessolved',
        component: HeroDetailCrimessolvedStatsComponent
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
