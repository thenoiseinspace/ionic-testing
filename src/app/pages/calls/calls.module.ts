import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallsPageRoutingModule } from './calls-routing.module';

import { CallsPage } from './calls.page';
import { PickupCardComponent} from '../../components/pickup-card/pickup-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallsPageRoutingModule,
  ],
  declarations: [
    CallsPage,
    PickupCardComponent]
})
export class CallsPageModule {}
