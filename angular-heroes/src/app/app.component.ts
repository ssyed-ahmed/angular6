import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';

  public selectedTab = 'dashboard';

  setSelectedTab(tab: string): void {
    this.selectedTab = tab;
  }
}
