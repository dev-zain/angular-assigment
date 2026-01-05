import { TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router, provideRouter } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)], // ✅ provides Router + ActivatedRoute for routerLink
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render dashboard menu link', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Dashboard');
  });

  it('should navigate to dashboard route', async () => {
    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);

    await router.navigateByUrl('/dashboard');
    expect(location.path()).toBe('/dashboard');
  });

  it('should navigate to profile route', async () => {
    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);

    await router.navigateByUrl('/profile');
    expect(location.path()).toBe('/profile');
  });
});
