import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected headers: HttpHeaders;

  constructor() {
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json');

  }

  setHeader(token = '') {
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);
  }

}
