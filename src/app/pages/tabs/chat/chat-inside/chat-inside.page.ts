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
    // for(let i = 0; i < 10; i++) {
    //   this.messages.unshift({msg: 'Lorem Ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, magnam?', senderSelf: true})
    //   this.messages.unshift({msg: 'Lorem Ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, magnam?', senderSelf: false})
    // }
    for(let i = 0; i < 1; i++) {
      this.messages.unshift({msg: 'its my pleasure', senderSelf: true})
      this.messages.unshift({msg: 'thank you', senderSelf: false})
      this.messages.unshift({msg: 'red with white strips', senderSelf: true})
      this.messages.unshift({msg: 'what was the colour of robbers shirt', senderSelf: false})
      this.messages.unshift({msg: 'ya sure, how may i help', senderSelf: true})
      this.messages.unshift({msg: 'we want more help from your side!', senderSelf: false})
    }
  }
  ngAfterViewInit() {
    this.ionContent.scrollToBottom()
  }

}
