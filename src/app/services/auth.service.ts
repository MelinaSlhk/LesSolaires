import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Connexion } from '../models/connexion';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  connexion(email: string, motdepasse: string): Observable<Connexion> {
    const body = { email: email, motdepasse: motdepasse };

    return this.http.post<Connexion>(
      `http://localhost:3000/api/auth/connexion`,
      body
    );
  }

  logout() {
    //deconnexion
    localStorage.removeItem('accesstoken');
    this.router.navigate(['/connexion']);
  }
}
