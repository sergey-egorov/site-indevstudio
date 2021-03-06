import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return httpOptions;
  }

  public getFile(filename) {
    return new Promise((resolve, reject) => {

      this.http.get(filename, { headers: { 'Content-Type': 'text/html; charset=utf-8' }, responseType: 'text' })
        .subscribe(
          (response: any) => {
            resolve(response);
          },
          (error) => {
            reject({ text: JSON.stringify(error) });
          }
        );
    });
  }

}
