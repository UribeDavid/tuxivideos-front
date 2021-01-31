import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister, UserSignIn } from '../models/models';

import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;

  usuario: UserRegister = null;

  constructor(private http: HttpClient,
              private router: Router) { }

  signIn( body: UserSignIn ) {
    localStorage.clear();
    return this.http.post(`${this.apiUrl}/api/v1/user/login`, body).pipe(
      tap( (response: any) => {
        if (response.status.ok) {
          this.usuario = response.user;
          localStorage.setItem('userData', JSON.stringify(response.user));
          this.router.navigate(['/principal']);
        }
      })
    )
  }
  
  signUp( body: UserRegister ) {
    return this.http.post(`${this.apiUrl}/api/v1/user/register`, body)
  }

  signOut() {
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
}
