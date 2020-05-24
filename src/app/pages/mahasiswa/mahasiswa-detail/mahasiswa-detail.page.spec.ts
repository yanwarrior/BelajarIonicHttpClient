import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MahasiswaDetailPage } from './mahasiswa-detail.page';

describe('MahasiswaDetailPage', () => {
  let component: MahasiswaDetailPage;
  let fixture: ComponentFixture<MahasiswaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MahasiswaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
