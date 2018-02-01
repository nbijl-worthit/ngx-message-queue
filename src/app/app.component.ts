import {Component, OnInit} from '@angular/core';
import {MessageService, MessageType} from '../../ngx-message-queue/dist';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private messageService: MessageService, private router: Router) {

  }

  ngOnInit() {
    this.messageService.show(MessageType.SUCCESS, 'This is a test message. Hello world!');

    setTimeout(() => {
      this.messageService.show(MessageType.DANGER, 'This is a test message. Hello world!');
    }, 1000);
    setTimeout(() => {
      this.messageService.show(MessageType.DARK, 'This is a test message. Hello world!');
    }, 2434);
    setTimeout(() => {
      this.messageService.show(MessageType.WARNING, '<a href="https://worth.systems">Go to worth systems</a>');
    }, 3455);
    setTimeout(() => {
      this.messageService.show(MessageType.INFO, '<a href="/home">Go to home</a>');
    }, 5632);
    setTimeout(() => {
      this.messageService.show(MessageType.PRIMARY, 'This is a test message. Hello world!');
    }, 6788);
    setTimeout(() => {
      this.messageService.show(MessageType.LIGHT, 'This is a test message. Hello world!');
    }, 7890);
  }

  goToLink(url) {
    this.router.navigateByUrl(url);
  }
}
