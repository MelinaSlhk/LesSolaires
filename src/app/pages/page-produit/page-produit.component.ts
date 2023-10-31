import { Component, Output } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css'],
})
export class PageProduitComponent {
 
  estConnecte: boolean = false;
  produits!: Produit[];
  isEditing = false;
  produitId!: number;



  constructor(private produitService: ProduitsService) {}

  ngOnInit(): void {
    // Vérification si un accesstoken est présent dans le localstorage
    const accessToken = localStorage.getItem('accesstoken');
    if (accessToken) {
      // Si oui, on est connecté
      this.estConnecte = true;
    } else {
      // Si non, on n'est pas connecté
      this.estConnecte = false;
    }
    
    this.produitService.getProduits().subscribe({
      next: (response) => {
        {
          this.produits = [...response];
          console.log(this.produits);
        }
      },
    });
  }

  modifierProduit() {
    this.isEditing = !this.isEditing;
  }

  produitEnEdition: any = null; // Pour stocker le produit en cours d'édition

  // ajouter produit(produit: produit) {}

  supprimerProduit(id: number) {
    const produitId = id;

    this.produitService.deleteProduit(produitId).subscribe(() => {});
    return alert('Produit supprimé');
  }

  confirmerChangements(
    id: number,
    nom: string,
    prix: number,
    quantite: number,
    id_categorie: number
  ) {
    this.isEditing = false;
    this.produitId = id;
    const updateProduit: Produit = {
      id: id,
      nom: nom,
      prix: prix,
      quantite: quantite,
      id_categorie: id_categorie,
    };
    this.produitService
      .updateProduit(this.produitId, updateProduit)
      .subscribe(() => {
        console.log('Mise à jour effectuée');
      });
  }
}
