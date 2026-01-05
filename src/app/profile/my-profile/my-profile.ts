import { Component } from '@angular/core';
import { AppDataService } from '../../services/app-data';
import { ItemList } from '../../items/item-list/item-list';


@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [ItemList],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.scss',
})
export class MyProfile {
  constructor(public data: AppDataService) {}
}
