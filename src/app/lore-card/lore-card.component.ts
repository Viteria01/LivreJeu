import {Component, Input, OnInit} from '@angular/core';
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

  constructor(public loreService: LoreService) {
  }

  ngOnInit() {
  }

  buttonClicked(button: number) {
    this.loreService.findLoreForChoice(button).subscribe(lore => {
      this.lore = lore;
    });
  }

}
