import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MahasiswaEditPage } from './mahasiswa-edit.page';

describe('MahasiswaEditPage', () => {
  let component: MahasiswaEditPage;
  let fixture: ComponentFixture<MahasiswaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MahasiswaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
