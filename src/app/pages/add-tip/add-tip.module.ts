import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTipPageRoutingModule } from './add-tip-routing.module';

import { AddTipPage } from './add-tip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddTipPageRoutingModule
  ],
  declarations: [AddTipPage]
})
export class AddTipPageModule {}
