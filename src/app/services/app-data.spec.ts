import { TestBed } from '@angular/core/testing';
import { AppDataService } from './app-data';

describe('AppData (service)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppDataService],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(AppDataService);
    expect(service).toBeTruthy();
  });

  it('should provide the app title', () => {
    const service = TestBed.inject(AppDataService);
    expect(service.title).toBe('Personal Calendar App');
  });

  it('should calculate the average grade', () => {
    const service = TestBed.inject(AppDataService);
    expect(service.averageGrade()).toBe(1.77);
  });
});
