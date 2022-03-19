import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTipPage } from './add-tip.page';

const routes: Routes = [
  {
    path: '',
    component: AddTipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTipPageRoutingModule {}
