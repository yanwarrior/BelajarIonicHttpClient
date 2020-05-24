import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { Mahasiswa } from 'src/app/models/mahasiswa';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mahasiswa-list',
  templateUrl: './mahasiswa-list.page.html',
  styleUrls: ['./mahasiswa-list.page.scss'],
})
export class MahasiswaListPage implements OnInit {
  mahasiswas: any;
  mahasiswa: Mahasiswa;

  constructor(
    public mahasiswaService: MahasiswaService,
    public alertController: AlertController
  ) {
    this.mahasiswas = [];
    this.mahasiswa = null;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllMahasiswa();
  }

  getAllMahasiswa() {
    this.mahasiswaService
    	.listMahasiswa()
    	.subscribe(response => {
	      console.log(response);
	      this.mahasiswas = response;
    });
  }

  getMahasiswa(mahasiswa) {
    this.mahasiswa = mahasiswa;
  }

  async delete(mahasiswa) {
    const alert = await this.alertController.create({
      header: 'Delete Confirmation!',
      subHeader: mahasiswa.nama,
      message: 'Are you sure to delete this mahasiswa?',
      buttons: [
        {
          text: 'YES',
          handler: () => {
            this.mahasiswaService
            .deleteMahasiswa(mahasiswa.id)
            .subscribe(response => {
              this.getAllMahasiswa();
              this.mahasiswa = null;
            });
          }
        },
        {
          text: 'CANCEL',
          handler: () => {
            console.log('confirm cancel')
          }
        }
      ]
    });
    await alert.present();
  }
}
