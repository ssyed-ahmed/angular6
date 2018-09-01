import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountListComponentComponent } from './account-list-component/account-list-component.component';
import { AccountCreateComponentComponent } from './account-create-component/account-create-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { ContactCreateComponentComponent } from './contact-create-component/contact-create-component.component';
import { LeadListComponentComponent } from './lead-list-component/lead-list-component.component';
import { LeadCreateComponentComponent } from './lead-create-component/lead-create-component.component';
import { OpportunityListComponentComponent } from './opportunity-list-component/opportunity-list-component.component';
import { OpportunityCreateComponentComponent } from './opportunity-create-component/opportunity-create-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponentComponent,
    AccountCreateComponentComponent,
    ContactListComponentComponent,
    ContactCreateComponentComponent,
    LeadListComponentComponent,
    LeadCreateComponentComponent,
    OpportunityListComponentComponent,
    OpportunityCreateComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
