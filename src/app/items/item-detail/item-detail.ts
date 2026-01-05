import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, Note } from '../../services/app-data';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './item-detail.html',
  styleUrls: ['./item-detail.scss'],

})
export class ItemDetail {
  @Input() item!: Task | Note;
}
