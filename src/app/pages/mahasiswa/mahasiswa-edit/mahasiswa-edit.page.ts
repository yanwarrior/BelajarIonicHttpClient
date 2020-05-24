import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from 'src/app/models/mahasiswa';
import { ActivatedRoute, Router } from '@angular/router';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';

@Component({
  selector: 'app-mahasiswa-edit',
  templateUrl: './mahasiswa-edit.page.html',
  styleUrls: ['./mahasiswa-edit.page.scss'],
})
export class MahasiswaEditPage implements OnInit {

  id: number;
  mahasiswa: Mahasiswa;
  
  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    public mahasiswaService: MahasiswaService
  ) {
    this.mahasiswa = new Mahasiswa();
  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params["id"];
    this.mahasiswaService.getMahasiswa(this.id)
      .subscribe(response => {
        console.log(response);
        this.mahasiswa = response;
      });
  }

  update() {
    this.mahasiswaService.updateMahasiswa(this.id, this.mahasiswa)
      .subscribe(response => {
        this.router.navigate(['mahasiswa-list']);
      });
  }

}
