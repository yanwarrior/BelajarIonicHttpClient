import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahasiswaCreatePage } from './mahasiswa-create.page';

const routes: Routes = [
  {
    path: '',
    component: MahasiswaCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahasiswaCreatePageRoutingModule {}
