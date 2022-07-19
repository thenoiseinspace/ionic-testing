import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PickupCardComponent } from 'src/app/components/pickup-card/pickup-card.component';
import { PickupCallPage } from '../pickup-call/pickup-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    PickupCardComponent,
    PickupCallPage,
    // PickupCallCard, 
  ]
})
export class HomePageModule {}
