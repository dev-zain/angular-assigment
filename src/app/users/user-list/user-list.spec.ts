import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UserList } from './user-list';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { User } from '../../models/user.model';

describe('UserList', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [UserList],
      providers: [
        UserService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(UserList);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display users from service', async () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'Test User',
        username: 'testuser',
        email: 'test@example.com',
        phone: '123',
        website: 'test. com',
        address: {
          street: 'St',
          suite: 'A',
          city: 'City',
          zipcode: '12345',
          geo: { lat: '0', lng: '0' },
        },
        company: {
          name: 'Test Co',
          catchPhrase: 'Testing',
          bs: 'test',
        },
      },
    ];

    await TestBed.configureTestingModule({
      imports: [UserList],
      providers: [
        {
          provide: UserService,
          useValue: { getUsers: () => of(mockUsers) },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(UserList);
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test User');
    expect(compiled.textContent).toContain('test@example.com');
  });
});