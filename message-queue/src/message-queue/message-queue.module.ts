import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageService} from './message.service';
import {MessageGeneratorComponent} from './message-generator/message-generator.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
  ],
  declarations: [
    MessageGeneratorComponent,
  ],
  exports: [
    MessageGeneratorComponent
  ]
})
export class MessageQueueModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessageQueueModule,
      providers: [
        MessageService
      ]
    };
  }
}
