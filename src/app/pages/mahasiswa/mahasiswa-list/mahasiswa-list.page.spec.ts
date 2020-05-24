import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MahasiswaListPage } from './mahasiswa-list.page';

describe('MahasiswaListPage', () => {
  let component: MahasiswaListPage;
  let fixture: ComponentFixture<MahasiswaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MahasiswaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
