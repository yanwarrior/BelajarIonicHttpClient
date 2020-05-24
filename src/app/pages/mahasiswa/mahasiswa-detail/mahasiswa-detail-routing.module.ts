import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahasiswaDetailPage } from './mahasiswa-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MahasiswaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahasiswaDetailPageRoutingModule {}
