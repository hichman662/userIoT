/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import {MessageDto } from '../models/messageDto.model';
import { ChatAppService } from './../services/chatApp.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

idUsuario: number =32768;
  constructor(private chatService: ChatAppService,
    private storage: Storage) {}

  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe( (receivedObj: MessageDto) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent
   /*  this.storage.get('idPatient').then((val) => {
      this.idUsuario = val;
    }); */
  }

  msgDto: MessageDto = new MessageDto();
  msgInboxArray: MessageDto[] = [];

  send(): void {
if(this.idUsuario !== 0 || this.idUsuario !== null){
  this.msgDto.id = this.idUsuario;
  console.log(this.msgDto.id);
}
    if(this.msgDto) {
      if(this.msgDto.name.length === 0 || this.msgDto.msgText.length === 0){
        window.alert("Both fields are required.");
        return;
      } else if(this.idUsuario !== 0 || this.idUsuario !== null){
        this.chatService.broadcastMessage(this.msgDto);                   // Send the message via a service
        console.log(this.msgDto);
      }
    }
  }

  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto();
    newObj.id = obj.id;
    newObj.name = obj.name;
    newObj.msgText = obj.msgText;
    this.msgInboxArray.push(newObj);
  }
}
