import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  constructor(private ms: MessageService) {}
  messages: string[]=[];
  ngOnInit(): void {
    this.ms.listenChanges().subscribe((data) => {
      this.messages = data;
    });
  }

}
