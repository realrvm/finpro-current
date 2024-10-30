import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { API_URL } from './api-url.token'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient)
  private readonly api_url = inject(API_URL)

  public get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.api_url}${url}`, {
      headers: this.headers,
      params,
    })
  }

  public post<T, D>(url: string, data?: D): Observable<T> {
    // TODO не работают POST запросы.
    return this.http.post<T>(`${this.api_url}${url}`, JSON.stringify(data), { headers: this.headers })
  }

  private get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    return new HttpHeaders(headersConfig)
  }
}
