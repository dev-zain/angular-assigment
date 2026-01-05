import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDataService, Task, Note } from '../../services/app-data';
import { ItemDetail } from '../item-detail/item-detail';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemDetail], 
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.scss'],

})
export class ItemList {
  items: (Task | Note)[];

  constructor(public data: AppDataService) {
    this.items = data.items;
  }
}
