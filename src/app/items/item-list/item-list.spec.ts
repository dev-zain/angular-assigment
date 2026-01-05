import { TestBed } from '@angular/core/testing';
import { ItemList } from './item-list';
import { AppDataService } from '../../services/app-data';

describe('ItemList', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [ItemList],
      providers: [AppDataService],
    }).compileComponents();

    const fixture = TestBed.createComponent(ItemList);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render both Task and Note items (heterogeneous list)', async () => {
    await TestBed.configureTestingModule({
      imports: [ItemList],
      providers: [AppDataService],
    }).compileComponents();

    const fixture = TestBed.createComponent(ItemList);
    fixture.detectChanges();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    // ✅ proves different entity outputs exist
    expect(text).toContain('Task:');
    expect(text).toContain('Note:');
  });
});
