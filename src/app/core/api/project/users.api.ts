import { Injectable } from '@angular/core';

import { RestApi } from '../_base/rest.api';

@Injectable({
  providedIn: 'root'
})
export class ProjectUsersApi {
  constructor(private _restApi: RestApi) {}

  register(req: { username: string; email: string; password: string }) {
    return this._restApi.post('/auth/local/register', req, {
      isAuthenticated: false
    });
  }

  login(req: { email: string; password: string }) {
    return this._restApi.post('/auth/local', req, {
      isAuthenticated: false
    });
  }
}
