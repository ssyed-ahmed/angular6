import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailGeneralComponent } from './hero-detail-general/hero-detail-general.component';
import { HeroDetailStatsComponent } from './hero-detail-stats/hero-detail-stats.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component';
import { SectionComponent } from './section/section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HeroDetailCrimessolvedStatsComponent } from './hero-detail-crimessolved-stats/hero-detail-crimessolved-stats.component';
import { HeadingTitleDirective } from './heading-title.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroDetailGeneralComponent,
    HeroDetailStatsComponent,
    MessagesComponent,
    DashboardComponent,
    LogsComponent,
    SectionComponent,
    PageNotFoundComponent,
    HeroSearchComponent,
    StatisticsComponent,
    HeroDetailCrimessolvedStatsComponent,
    HeadingTitleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Angular Heroes',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
