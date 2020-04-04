import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export class ApiOptions {
  params?: HttpParams;
  headers?: HttpHeaders;
  observe?: string;
  isAuthenticated? = true;
}

const { token: backendToken } = environment.project.backend;

@Injectable({
  providedIn: 'root'
})
export class RestApi {
  private backendUrl: string;

  constructor(public http: HttpClient) {
    this.backendUrl = environment.project.backend.url;
    this.onCreate();
  }

  onCreate() {}

  private appendAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
    headers = headers || new HttpHeaders();
    const token = localStorage.getItem(backendToken.localStorageKey);
    if (token && token !== '') {
      headers = headers.append(
        'Authorization',
        `${backendToken.type} ${token}`
      );
    }
    return headers;
  }

  public get(
    path: string,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    options.headers = options.isAuthenticated
      ? this.appendAuthorizationHeader(options.headers)
      : options.headers;
    return this.http.get(`${this.backendUrl}${path}`, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body'
    });
  }

  public post(
    path: string,
    body?: any,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    options.headers = options.isAuthenticated
      ? this.appendAuthorizationHeader(options.headers)
      : options.headers;
    return this.http.post(`${this.backendUrl}${path}`, body, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body'
    });
  }

  public put(
    path: string,
    body?: any,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    options.headers = this.appendAuthorizationHeader(options.headers);
    return this.http.put(`${this.backendUrl}${path}`, body, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body'
    });
  }

  public patch(
    path: string,
    body?: any,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    options.headers = this.appendAuthorizationHeader(options.headers);
    return this.http.patch(`${this.backendUrl}${path}`, body, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body'
    });
  }

  public delete(
    path: string,
    options: ApiOptions = new ApiOptions()
  ): Observable<any> {
    options = options || {};
    options.headers = this.appendAuthorizationHeader(options.headers);
    return this.http.delete(`${this.backendUrl}${path}`, {
      params: options.params,
      headers: options.headers,
      observe: (options.observe || 'body') as 'body'
    });
  }
}
