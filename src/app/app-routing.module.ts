import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mahasiswa-list',
    pathMatch: 'full'
  },
  {
    path: 'mahasiswa-create',
    loadChildren: () => import(
      './pages/mahasiswa/mahasiswa-create/mahasiswa-create.module'
    ).then( m => m.MahasiswaCreatePageModule)
  },
  {
    path: 'mahasiswa-edit/:id',
    loadChildren: () => import(
      './pages/mahasiswa/mahasiswa-edit/mahasiswa-edit.module'
    ).then( m => m.MahasiswaEditPageModule)
  },
  {
    path: 'mahasiswa-list',
    loadChildren: () => import(
      './pages/mahasiswa/mahasiswa-list/mahasiswa-list.module'
    ).then( m => m.MahasiswaListPageModule)
  },
  {
    path: 'mahasiswa-detail',
    loadChildren: () => import(
      './pages/mahasiswa/mahasiswa-detail/mahasiswa-detail.module'
    ).then( m => m.MahasiswaDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, { 
        preloadingStrategy: PreloadAllModules 
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
