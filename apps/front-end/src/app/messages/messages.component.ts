import { Component } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'tour-of-heroes-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  constructor(public messageService:MessagesService){}
}
