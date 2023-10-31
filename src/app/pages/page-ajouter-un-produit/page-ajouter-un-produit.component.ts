import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Produit } from 'src/app/models/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-page-ajouter-un-produit',
  templateUrl: './page-ajouter-un-produit.component.html',
  styleUrls: ['./page-ajouter-un-produit.component.css'],
})
export class PageAjouterUnProduitComponent {
  allCategories!: Categorie[];
  categoriesToDisplay: Categorie[] = [];
  ajouterProduitForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produitService: ProduitsService,
    private router: Router,
    private categorieService: CategorieService
  ) {
   
  }

  ngOnInit() {
    this.initialForm();
    this.categorieService.getAllCategories().subscribe({
      next: (response) => {
        this.allCategories = [...response];
        this.categoriesToDisplay = [...response];
        console.log(this.categoriesToDisplay);
      },
    });
  }

  initialForm() {
    this.ajouterProduitForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
    });
  }

  ajouterProduit() {
    if (this.ajouterProduitForm) {
      const data: Produit = {
        nom: this.ajouterProduitForm.get('nom')?.value,
        prix: this.ajouterProduitForm.get('prix')?.value,
        quantite: this.ajouterProduitForm.get('quantite')?.value,
        id_categorie: Number(this.ajouterProduitForm.value.categorie),
      };
      console.log('are you ok ? ', data);
      this.produitService.ajouterProduit(data).subscribe({
        next: (response) => {
          console.log(data);
          this.router.navigate(['/produit']);
        },
      });
    } else {
      alert('Formulaire invalide');
    }
  }
}




