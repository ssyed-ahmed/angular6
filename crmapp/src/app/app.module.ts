import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadCreateComponent } from './lead-create/lead-create.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { OpportunityCreateComponent } from './opportunity-create/opportunity-create.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactCreateComponent,
    AccountListComponent,
    AccountCreateComponent,
    LeadListComponent,
    LeadCreateComponent,
    OpportunityListComponent,
    OpportunityCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
