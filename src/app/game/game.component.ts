import { Component, OnInit } from '@angular/core';
import {LoreCardComponent} from '../lore-card/lore-card.component';
import {Lore} from '../entities/Lore';
import {LoreService} from '../service/lore.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  initialLore: Lore;
  constructor(public loreService: LoreService) {
  }
  ngOnInit() {
    this.loreService.getInitialLore().subscribe(lore => {
      this.initialLore = lore;
    });
  }

}
