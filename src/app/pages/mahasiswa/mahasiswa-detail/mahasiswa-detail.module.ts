import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahasiswaDetailPageRoutingModule } from './mahasiswa-detail-routing.module';

import { MahasiswaDetailPage } from './mahasiswa-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahasiswaDetailPageRoutingModule
  ],
  declarations: [MahasiswaDetailPage]
})
export class MahasiswaDetailPageModule {}
