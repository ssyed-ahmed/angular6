import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from 'src/app/account-list/account-list.component';
import { AccountCreateComponent } from 'src/app/account-create/account-create.component';
import { ContactListComponent } from 'src/app/contact-list/contact-list.component';
import { ContactCreateComponent } from 'src/app/contact-create/contact-create.component';
import { LeadListComponent } from 'src/app/lead-list/lead-list.component';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { Component } from '@angular/core/src/metadata/directives';
import { LeadCreateComponent } from 'src/app/lead-create/lead-create.component';
import { OpportunityListComponent } from 'src/app/opportunity-list/opportunity-list.component';
import { OpportunityCreateComponent } from 'src/app/opportunity-create/opportunity-create.component';

const routes:Routes = [
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full'
  },
  {
    path: 'accounts',
    component: AccountListComponent
  },
  {
    path: 'create-account',
    component: AccountCreateComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'create-contact',
    component: ContactCreateComponent
  },
  {
    path: 'leads',
    component: LeadListComponent
  },
  {
    path: 'create-lead',
    component: LeadCreateComponent
  },
  {
    path: 'opportunities',
    component: OpportunityListComponent
  },
  {
    path: 'create-opportunity',
    component: OpportunityCreateComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
