import { TestBed } from '@angular/core/testing';
import { ItemDetail } from './item-detail';
import { Task } from '../../services/app-data';

describe('ItemDetail', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDetail], // standalone component
    }).compileComponents();

    const fixture = TestBed.createComponent(ItemDetail);

    // ✅ Provide required @Input before first change detection
    const task: Task = { type: 'task', title: 'Test Task', done: true };
    fixture.componentInstance.item = task;

    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
