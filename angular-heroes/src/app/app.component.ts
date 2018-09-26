import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';

  public selectedTab = 'dashboard';

  constructor(private communicationService: CommunicationService) {}

  setSelectedTab(tab: string): void {
    this.selectedTab = tab;
  }

  restoreHeroes(): void {
    this.communicationService.sendMessage('restore heroes');
  }
}
