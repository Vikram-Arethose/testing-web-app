import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BakerySearchPage } from './bakery-search.page';

describe('BakerySearchPage', () => {
  let component: BakerySearchPage;
  let fixture: ComponentFixture<BakerySearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakerySearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BakerySearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
