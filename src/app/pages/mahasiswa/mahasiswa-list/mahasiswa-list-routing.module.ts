import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahasiswaListPage } from './mahasiswa-list.page';

const routes: Routes = [
  {
    path: '',
    component: MahasiswaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahasiswaListPageRoutingModule {}
