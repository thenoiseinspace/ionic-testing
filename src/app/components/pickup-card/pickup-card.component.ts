import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-card',
  templateUrl: './pickup-card.component.html',
  styleUrls: ['./pickup-card.component.scss'],
})
export class PickupCardComponent implements OnInit {

  @Input() hasHeader = true;
  @Input() hasFooter: boolean;

  constructor() { }

  ngOnInit() {}

  async anyName() {
    if (this.hasHeader == true){
      this.hasHeader = false;
      return;}
    if (this.hasHeader == false){
    this.hasHeader = true;
  }
}

}
