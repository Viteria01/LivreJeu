import {Component, Input, OnInit} from '@angular/core';
import {Inventory} from '../entities/Inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {
  @Input()
  public inventory: Inventory;
  constructor() { }

  ngOnInit() {
  }

}
