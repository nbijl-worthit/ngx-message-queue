import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../message';
import {MessageService} from '../message.service';
import {slideDownUp} from '../message.animation';

@Component({
  selector: 'wis-message-generator',
  templateUrl: './message-generator.component.html',
  animations: [slideDownUp]
})
export class MessageGeneratorComponent implements OnInit {
  private messages: Array<Message> = [];
  @Output() linkUrl: EventEmitter<string> = new EventEmitter();

  private static isExternal(url): boolean {
    const match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
    if (match != null && typeof match[1] === 'string' &&
      match[1].length > 0 && match[1].toLowerCase() !== location.protocol) {
      return true;
    }
    if (match != null && typeof match[2] === 'string' &&
      match[2].length > 0 &&
      match[2].replace(new RegExp(`:(${{'http:': 80, 'https:': 443}[location.protocol]})?$`), '')
      !== location.host) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private messageService: MessageService) {
    this.messageService.messages.subscribe((messages: Array<Message>) => {
      this.messages = messages;
    });
  }

  ngOnInit() {
  }

  getMessageTypeClass(message) {
    if (!!message) {
      return `alert-${message.type.toLowerCase()}`;
    }
  }

  animationDone(event, innerHtml) {
    // Because using routerLinks in innerHTML is not supported by Angular a
    // click handler is attached for handling links
    if (event.fromState === 'void' && !!innerHtml) {
      const anchors = innerHtml.querySelectorAll('a[href]');
      if (anchors.length > 0) {
        anchors.forEach((anchorElement: HTMLAnchorElement) => {
          const url = anchorElement.getAttribute('href');
          if (MessageGeneratorComponent.isExternal(url)) {
            anchorElement.setAttribute('target', '_blank');
          } else {
            anchorElement.addEventListener('click', e => {
              e.preventDefault();
              this.linkUrl.emit(anchorElement.getAttribute('href'));
            });
          }
        });
      }
    }
  }
}
