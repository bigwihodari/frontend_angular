import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
    private authUrl = 'http://localhost:8080/api/auth/login';
    private isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post(this.authUrl, credentials).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.isAuthenticated = true;
        }
        }
      )
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }


  /*
  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    this.router.navigate(['/auth']);
  }

 */

}
