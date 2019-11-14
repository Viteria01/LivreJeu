import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoreCardComponent} from '../lore-card/lore-card.component';
import {Lore} from '../entities/Lore';
import {LoreService} from '../service/lore.service';
import {Player} from '../entities/Player';
import {MatSnackBar} from '@angular/material';
import {Item} from '../entities/Item';
import {SaveService} from '../service/save-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit, OnDestroy {
  lore: Lore;
  private player: Player;

  constructor(public loreService: LoreService, private snackBar: MatSnackBar, private saveService: SaveService) {
  }

  ngOnInit() {
    const currentStateGame = this.saveService.getCurrentStateGame();
    if (currentStateGame !== null) {
      this.lore = JSON.parse(currentStateGame[1]);
      this.player = JSON.parse(currentStateGame[0]);
    } else {
      this.loreService.getInitialLore().subscribe(lore => {
        this.lore = lore;
        this.player = {
          hp: 20,
          inventory: {
            items: []
          }
        };
      });
    }
  }

  buttonClicked(button: number) {
    this.loreService.findLoreForChoice(button).subscribe(lore => {
      if (!lore) {
        this.loreService.getInitialLore().subscribe(initialLore => {
          this.player.inventory.items = [];
          this.lore = initialLore;
        });
        this.saveService.saveCurrentStateGame(this.player, this.lore);
      } else {
        let hasRequiredItems = true;
        const itemsRequired: string[] = [];
        if (this.lore.listOfChoices.length > 0) {
          this.lore.listOfChoices.find(choice => choice.page === button).items.forEach(item => {
            if (!this.player.inventory.items.some(playerItem => playerItem.id === item.id)) {
              itemsRequired.push(item.label);
              hasRequiredItems = false;
            }
          });
        }
        if (hasRequiredItems) {
          this.lore = lore;
          const itemsPicked: string[] = [];
          this.lore.items.forEach(item => {
            itemsPicked.push(item.label);
            (!this.player.inventory.items.includes(item)) ? this.player.inventory.items.push(item) : null;
          });
          if (itemsPicked.length > 0) {
            this.snackBar.open('You picked up the following items : ' + itemsPicked.join(', '), null, {
              duration: 1500
            });
          }
          this.saveService.saveCurrentStateGame(this.player, this.lore);
        } else {
          this.snackBar.open('You dont have the required items : ' + itemsRequired.join(', '), null, {
            duration: 1500
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
  }
}
