import { Injectable, Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiURL = 'https://api.escuelajs.co/api/v1/auth/login';

  login(credentials: any): Observable<any> {
    // Send a POST request with the user credentials
    return this.http.post<any>(this.apiURL, credentials);
  }
  isLoggedOn(blnChk: boolean): boolean
  {
    return blnChk;
  }
  
}
