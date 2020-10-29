import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GooglePayComponent } from './google-pay.component';

describe('GooglePayComponent', () => {
  let component: GooglePayComponent;
  let fixture: ComponentFixture<GooglePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePayComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GooglePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
