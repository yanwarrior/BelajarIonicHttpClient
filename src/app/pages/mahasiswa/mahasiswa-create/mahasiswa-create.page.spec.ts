import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MahasiswaCreatePage } from './mahasiswa-create.page';

describe('MahasiswaCreatePage', () => {
  let component: MahasiswaCreatePage;
  let fixture: ComponentFixture<MahasiswaCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MahasiswaCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
