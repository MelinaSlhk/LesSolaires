import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    const token = localStorage.getItem('accesstoken');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>('http://localhost:3000/api/produit');
  }

  getProduitById(id: number) {
    return this.http.get<Produit[]>(`http://localhost:3000/api/produit/${id}`);
  }

  deleteProduit(produitId: number): Observable<Produit> {
    const url = `http://localhost:3000/api/produit/${produitId}`;
    return this.http.delete<Produit>(url,this.getHttpOptions());
  }

  updateProduit(
    produitId: number,
    updateProduit: Produit
  ): Observable<Produit> {
    const url = `http://localhost:3000/api/produit/${produitId}`;
    return this.http.patch<Produit>(url, updateProduit,this.getHttpOptions());
  }

  ajouterProduit(produit: Produit): Observable<Produit> {
    const url = `http://localhost:3000/api/produit`;
    return this.http.post<Produit>(url, produit,this.getHttpOptions())
  }
}
