import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMainPageComponent } from './device-main-page.component';

describe('DeviceMainPageComponent', () => {
  let component: DeviceMainPageComponent;
  let fixture: ComponentFixture<DeviceMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceMainPageComponent]
    });
    fixture = TestBed.createComponent(DeviceMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
