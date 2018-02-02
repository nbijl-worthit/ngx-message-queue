# Ngx Message Queue

 Render alert messages from anywhere in you Angular application. Just place the message renderer component somewhere in you application and send messages to it from anywhere to render them. Multiple messages will be added to the queue and will dissapear after a certain timeout.
  

## Install the package

Run in your angular project root directory

```
npm install @worth/ngx-message-queue --save
```

### Include the module `MessageQueueModule`


```
imports: [
  MessageQueueModule.forRoot()
]
```

### Bootstrap 4
The message renderer component renders an alert based on boostrap 4 styling. You can add the bootstrap css into the head of you index.html in your angular app. But you don't need to use it and style it your way. 
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```

### Example component 
Just add the component somewhere you want to render the messages.  
```
<wis-message-generator></wis-message-generator>
```

### Import service
Import the service from a component you need to send the message from.
```
constructor(private messageService: MessageService){}
```

### Send a message
Call the show function with a statically typed message type and a text as string.
```
this.messageService.show(MessageType.SUCCESS, 'This is a test message. Hello world!');
```

### Send a message with anchor links
You can use html tags as a message. I.E. anchor links: 
```
this.messageService.show(MessageType.SUCCESS, <a href="/home">Go to home</a> right now or <a href="https://worth.systems"><strong>Go to worth systems</strong></a>);
```

### Define navigation
If you use anchor links in your messages you can use the `[linkUrl]` input to get the url and navigate to a page. It automatically check if it's an external or internal link.

Define a function in the component where you placed your message generator component. Set it to be triggered by the component output event `(linkUrl)` and navigate to and url the usual way with the router module.

```
<wis-message-generator (linkUrl)="goToLink($event)"></wis-message-generator>
```

```
goToLink(url) {
  this.router.navigateByUrl(url);
}
```

### Message types
There are defined types that you can use for you message type. It's based on the Bootstrap 4 classes.
- MessageType.INFO
- MessageType.WARNING
- MessageType.SUCCESS
- MessageType.DANGER
- MessageType.PRIMARY
- MessageType.SECONDARY
- MessageType.LIGHT
- MessageType.DARK


Online demo

Todo https://stackblitz.com demo here!


Made with &#10084; by [Worth Internet Systems](http://worth.systems) front-end developers in the Netherlands
