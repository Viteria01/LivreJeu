import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lore} from '../entities/Lore';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass']
})
export class ButtonsComponent implements OnInit {

  @Input()
  lore: Lore;
  @Output()
  clickChoice = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
