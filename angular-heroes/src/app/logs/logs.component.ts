import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  messages: string[]

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messages = this.messageService.messages;
  }

}
