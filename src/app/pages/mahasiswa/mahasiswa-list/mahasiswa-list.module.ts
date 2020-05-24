import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahasiswaListPageRoutingModule } from './mahasiswa-list-routing.module';

import { MahasiswaListPage } from './mahasiswa-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahasiswaListPageRoutingModule
  ],
  declarations: [MahasiswaListPage]
})
export class MahasiswaListPageModule {}
