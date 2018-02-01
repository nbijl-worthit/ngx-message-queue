import {Injectable, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from 'rxjs/Subject';
import {Message} from './message';
import {MessageType} from './message.enum';

const MESSAGE_TIMEOUT = 6000;

@Injectable()
export class MessageService {
  private messageQueue: Array<Message> = [];
  private timer: any;
  messages: Subject<Array<Message>> = new Subject<Array<Message>>();

  constructor(private sanitizer: DomSanitizer) {
    this.messages.subscribe((messages: Array<Message>) => {
      if (messages.length === 1) {
        this.timer = setInterval(() => {
          this.messageQueue.shift();
          if (messages.length === 0) {
            clearInterval(this.timer);
          }
        }, MESSAGE_TIMEOUT);
      }
    });
  }

  show(type: MessageType, body: string) {
    const message: Message = {
      type: type,
      body: this.sanitizer.sanitize(SecurityContext.HTML, body)
    };
    this.messageQueue.push(message);
    this.messages.next(this.messageQueue);
  }
}
