import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatInsidePageRoutingModule } from './chat-inside-routing.module';

import { ChatInsidePage } from './chat-inside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatInsidePageRoutingModule
  ],
  declarations: [ChatInsidePage]
})
export class ChatInsidePageModule {}
