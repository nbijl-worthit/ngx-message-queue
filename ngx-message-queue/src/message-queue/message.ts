import {MessageType} from './message.enum';

export interface Message {
  type: MessageType;
  body: string;
}
