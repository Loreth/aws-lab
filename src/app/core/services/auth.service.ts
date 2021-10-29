import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {getEndpointUrl, LOGIN} from "../../shared/rest-api-urls";
import {Router} from "@angular/router";
import {AuthRequest} from "../../shared/model/authentication/authRequest";
import {map} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable} from "rxjs";

export const JWT_KEY = 'jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl = '';
  jwtHelperService: JwtHelperService;

  constructor(private http: HttpClient,
              private router: Router) {
    this.jwtHelperService = new JwtHelperService();
  }

  login(authRequest: AuthRequest): Observable<any> {
    return this.http.post(getEndpointUrl(LOGIN), authRequest).pipe(
      map((response: any) => localStorage.setItem(JWT_KEY, response.token))
    );
  }

  logout(): void {
    console.log('logging out');
    localStorage.removeItem(JWT_KEY);
    this.router.navigateByUrl('/login');
  }

  static isUserLoggedIn(): boolean {
    return AuthService.getToken() != null;
  }

  static getToken(): string | null {
    return localStorage.getItem(JWT_KEY);
  }
}
