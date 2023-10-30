import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProduitComponent } from './pages/page-produit/page-produit.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { PageAjouterUnProduitComponent } from './pages/page-ajouter-un-produit/page-ajouter-un-produit.component';
import { PageErreur404Component } from './pages/page-erreur404/page-erreur404.component';

const routes: Routes = [
  { path: '', redirectTo: 'produit', pathMatch: 'full' },
  { path: 'connexion', component: PageConnexionComponent },
  { path: 'produit', component: PageProduitComponent },
  { path: 'ajouter-un-produit', component: PageAjouterUnProduitComponent },
  { path: '**', component: PageErreur404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
