import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatInsidePage } from './chat-inside.page';

const routes: Routes = [
  {
    path: '',
    component: ChatInsidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatInsidePageRoutingModule {}
