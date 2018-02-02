import {Component, OnInit} from '@angular/core';
import {MessageService, MessageType} from '../../ngx-message-queue/dist';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  static getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor(private messageService: MessageService, private router: Router) {
  }

  ngOnInit() {
    const messagesArray: Array<any> = [
      {type: MessageType.SUCCESS, body: 'This is a test message. Hello world!'},
      {type: MessageType.DARK, body: 'This is a test message. Hello world!'},
      {type: MessageType.LIGHT, body: 'This is a test message. Hello world!'},
      {type: MessageType.INFO, body: '<a href="/home">Go to home</a> right now or <a href="https://worth.systems">Go to worth systems</a>'},
      {type: MessageType.WARNING, body: '<a href="https://worth.systems">Go to worth systems</a>'},
      {type: MessageType.DANGER, body: 'This is a test message. Hello world!'},
      {type: MessageType.SECONDARY, body: 'This is a test message. Hello world!'},
      {type: MessageType.PRIMARY, body: 'This is a test message. Hello world!'}
    ];

    this.messageService.show(MessageType.SUCCESS, 'This is a test message. Hello world!');

    const int = setInterval(() => {
      const randomIndex = AppComponent.getRandomArbitrary(0, messagesArray.length - 1);
      this.messageService.show(messagesArray[randomIndex].type, messagesArray[randomIndex].body);
    }, 4000);

    setTimeout(()=>{
      clearInterval(int);
    }, 1000 * 60);
  }

  goToLink(url) {
    this.router.navigateByUrl(url);
  }
}
