import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat-inside',
  templateUrl: './chat-inside.page.html',
  styleUrls: ['./chat-inside.page.scss'],
})
export class ChatInsidePage implements OnInit, AfterViewInit {

  messages = []
  @ViewChild('ionContent') ionContent: IonContent

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 10; i++) {
      this.messages.unshift({msg: 'Lorem Ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, magnam?', senderSelf: true})
      this.messages.unshift({msg: 'Lorem Ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, magnam?', senderSelf: false})
    }
  }
  ngAfterViewInit() {
    this.ionContent.scrollToBottom()
  }

}
