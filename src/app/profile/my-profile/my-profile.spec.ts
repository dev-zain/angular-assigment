import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MyProfile } from './my-profile';
import { AppDataService } from '../../services/app-data';

describe('MyProfile (component)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProfile],   // standalone component
      providers: [AppDataService],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MyProfile);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have access to AppData service', () => {
    const fixture = TestBed.createComponent(MyProfile);
    const component = fixture.componentInstance;

    expect(component.data).toBeTruthy();
    expect(component.data.title).toBe('Personal Calendar App');
  });

  it('should render app title from service in HTML', () => {
    const fixture = TestBed.createComponent(MyProfile);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Personal Calendar App');
  });

  it('should render the profile headline', () => {
    const fixture = TestBed.createComponent(MyProfile);
    fixture.detectChanges();

    const h2 = fixture.debugElement.query(By.css('h2')).nativeElement as HTMLElement;
    expect(h2.textContent).toContain('My Profile');
  });
});
