import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BakeryPage } from './bakery.page';

describe('BakeryPage', () => {
  let component: BakeryPage;
  let fixture: ComponentFixture<BakeryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BakeryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
