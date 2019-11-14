import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lore} from '../entities/Lore';
import {LoreService} from '../service/lore.service';

@Component({
  selector: 'app-lore-card',
  templateUrl: './lore-card.component.html',
  styleUrls: ['./lore-card.component.sass']
})
export class LoreCardComponent implements OnInit {
  @Input()
  lore: Lore;
  @Output()
  clickChoice = new EventEmitter();
  constructor(public loreService: LoreService) {
  }

  ngOnInit() {
  }

  buttonClicked(button: number) {
    this.clickChoice.emit(button);
  }

}
