import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrls: ['./barre-de-navigation.component.css'],
})
export class BarreDeNavigationComponent implements OnInit {
  estConnecte: boolean = false;

  ngOnInit(): void {
    // Vérification si un accesstoken est présent dans le localstorage
    const accessToken = localStorage.getItem('accesstoken');
    if (accessToken) {
      this.estConnecte = true;
      // Si oui on est connecté
    } else {
      this.estConnecte = false;
      // Si non on n'est pas connecté
    }
  }
  
  // Méthode pour se déconnecter
  seDeconnecter() {
    localStorage.removeItem('accesstoken'); // Supprimer le token du localstorage
    this.estConnecte = false;
    alert ('deconnecte');
  };
}