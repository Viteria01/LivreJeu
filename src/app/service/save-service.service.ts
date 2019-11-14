import { Injectable } from '@angular/core';
import {Player} from '../entities/Player';
import {Lore} from '../entities/Lore';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor() { }

  saveCurrentStateGame(player: Player, lore: Lore) {
    localStorage.setItem('player', JSON.stringify(player));
    localStorage.setItem('lore', JSON.stringify(lore));
  }
  getCurrentStateGame() {
    return localStorage.getItem('player') !== null ?
      [localStorage.getItem('player'), localStorage.getItem('lore')] :
      null;
  }
}
