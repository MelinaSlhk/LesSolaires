import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  constructor(private http: HttpClient) {}

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>('http://localhost:3000/api/produit');
  }

  getProduitById(id: number) {
    return this.http.get<Produit[]>(`http://localhost:3000/api/produit/${id}`);
  }

  deleteProduit(produitId: number): Observable<Produit> {
    const url = `http://localhost:3000/api/produit/${produitId}`;
    return this.http.delete<Produit>(url);
  }

  updateProduit(
    produitId: number,
    updateProduit: Produit
  ): Observable<Produit> {
    const url = `http://localhost:3000/api/produit/${produitId}`;
    return this.http.patch<Produit>(url, updateProduit);
  }

  ajouterProduit(produit: Produit): Observable<Produit> {
    const url = `http://localhost:3000/api/produit`;
    return this.http.post<Produit>(url, produit);
  }
}
