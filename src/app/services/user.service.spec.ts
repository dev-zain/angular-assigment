import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users from API', () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johnd',
        email: 'john@example.com',
        phone: '123-456-7890',
        website: 'john.com',
        address: {
          street: 'Main St',
          suite: 'Apt 1',
          city:  'New York',
          zipcode: '10001',
          geo: { lat: '40.7128', lng: '-74.0060' },
        },
        company:  {
          name: 'Acme Corp',
          catchPhrase: 'Innovation',
          bs: 'synergize',
        },
      },
    ];

    service.getUsers().subscribe((users) => {
      expect(users. length).toBe(1);
      expect(users[0]. name).toBe('John Doe');
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should fetch a single user by ID', () => {
    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      username: 'johnd',
      email: 'john@example.com',
      phone: '123-456-7890',
      website: 'john. com',
      address: {
        street: 'Main St',
        suite: 'Apt 1',
        city: 'New York',
        zipcode: '10001',
        geo: { lat: '40.7128', lng: '-74.0060' },
      },
      company: {
        name: 'Acme Corp',
        catchPhrase: 'Innovation',
        bs: 'synergize',
      },
    };

    service.getUserById(1).subscribe((user) => {
      expect(user.id).toBe(1);
      expect(user.name).toBe('John Doe');
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(req.request. method).toBe('GET');
    req.flush(mockUser);
  });
});