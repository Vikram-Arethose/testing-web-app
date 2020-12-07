import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DebitComponent } from './debit.component';

describe('DebitComponent', () => {
  let component: DebitComponent;
  let fixture: ComponentFixture<DebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
