import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from 'src/app/models/mahasiswa';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mahasiswa-create',
  templateUrl: './mahasiswa-create.page.html',
  styleUrls: ['./mahasiswa-create.page.scss'],
})
export class MahasiswaCreatePage implements OnInit {

  mahasiswa: Mahasiswa

  constructor(
    public mahasiswaService: MahasiswaService,
    public router: Router
  ) {
    this.mahasiswa = new Mahasiswa();
  }

  ngOnInit() {
  }

  submitForm() {
    this.mahasiswaService
      .createMahasiswa(this.mahasiswa)
      .subscribe((response) => {
        this.router.navigate(['mahasiswa-list']);
      });
  }
}
