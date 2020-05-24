import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahasiswaCreatePageRoutingModule } from './mahasiswa-create-routing.module';

import { MahasiswaCreatePage } from './mahasiswa-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahasiswaCreatePageRoutingModule
  ],
  declarations: [MahasiswaCreatePage]
})
export class MahasiswaCreatePageModule {}
