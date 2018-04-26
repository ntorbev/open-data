import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/from';

@Injectable()
export class WorldBankService {
  private myData = [];

  constructor(private http: HttpClient) {
  }

  getData(value: string): Observable<any> {
    return this.http.get(`/api?q=${value}`)
      .do(data => this.myData.push(data));
  }

  resetData() {
    this.myData.length = 0;
  }
}
