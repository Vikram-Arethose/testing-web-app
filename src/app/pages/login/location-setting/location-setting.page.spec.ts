import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationSettingPage } from './location-setting.page';

describe('LocationSettingPage', () => {
  let component: LocationSettingPage;
  let fixture: ComponentFixture<LocationSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
