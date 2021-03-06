import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {SubtitleSplitterApi} from '../endpoints/subtitle-splitter.api';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubtitleSplitterService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getSubtitleParts(url): Observable<any> {
    this.setHeaderFile();
    return this.http.get(SubtitleSplitterApi.getSubtitleParts(url), { headers: this.headers }).pipe(
      tap(
        data => {
          return { ...data };
        },
        error => {
          return error;
        }
      )
    );
  }

  splitSubtitleByCue(form, subtitle): Observable<any> {
    this.setHeaderFile();
    const subtitleFormData = new FormData();

    subtitleFormData.append('name', form.name);
    subtitleFormData.append('parts', form.parts);
    subtitleFormData.append('subtitle', subtitle[0]);

    return this.http.post(SubtitleSplitterApi.splitSubtitleByCue(), subtitleFormData, { headers: this.headers,  }).pipe(
      tap(
        data => {
          return { ...data };
        },
        error => {
          return error;
        }
      )
    );
  }
}
