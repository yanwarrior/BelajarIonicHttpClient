import { Injectable } from '@angular/core';
import { 
	HttpClient, 
	HttpHeaders, 
	HttpErrorResponse 
} from '@angular/common/http';
import { Mahasiswa } from '../models/mahasiswa';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  base_path = 'http://localhost:3000/mahasiswa';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  createMahasiswa(item): Observable<Mahasiswa> {
    return this.http
      .post<Mahasiswa>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getMahasiswa(id): Observable<Mahasiswa> {
    return this.http
      .get<Mahasiswa>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  listMahasiswa(): Observable<Mahasiswa> {
    return this.http
      .get<Mahasiswa>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateMahasiswa(id, item): Observable<Mahasiswa> {
    return this.http
      .put<Mahasiswa>(
      	this.base_path 
      	+ '/' 
      	+ id, 
      	JSON.stringify(item), 
      	this.httpOptions
      )
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteMahasiswa(id) {
    return this.http
      .delete<Mahasiswa>(
      	this.base_path 
      	+ '/' 
      	+ id, 
      	this.httpOptions
      )
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}