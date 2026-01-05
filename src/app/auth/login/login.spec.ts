import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Login } from './login';

describe('Login (template-driven form)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Login);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should keep submit button disabled when form is invalid', async () => {
    const fixture = TestBed.createComponent(Login);
    fixture.detectChanges();

    // Wait for template-driven form directives to initialize
    await fixture.whenStable();
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button[type="submit"]'))
      .nativeElement as HTMLButtonElement;

    expect(btn.disabled).toBe(true);
  });

  it('should enable submit button when form is valid', async () => {
    const fixture = TestBed.createComponent(Login);
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    const email = fixture.debugElement.query(By.css('input[name="email"]'))
      .nativeElement as HTMLInputElement;
    const password = fixture.debugElement.query(By.css('input[name="password"]'))
      .nativeElement as HTMLInputElement;

    email.value = 'test@example.com';
    email.dispatchEvent(new Event('input'));

    password.value = 'abcd';
    password.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // Wait for validation state to update
    await fixture.whenStable();
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('button[type="submit"]'))
      .nativeElement as HTMLButtonElement;

    expect(btn.disabled).toBe(false);
  });

  it('should show success message after submit', async () => {
    const fixture = TestBed.createComponent(Login);
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    const email = fixture.debugElement.query(By.css('input[name="email"]'))
      .nativeElement as HTMLInputElement;
    const password = fixture.debugElement.query(By.css('input[name="password"]'))
      .nativeElement as HTMLInputElement;

    email.value = 'test@example.com';
    email.dispatchEvent(new Event('input'));

    password.value = 'abcd';
    password.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form')).nativeElement as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Login submitted');
  });
});
