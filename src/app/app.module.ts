import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageProduitComponent } from './pages/page-produit/page-produit.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { PageAjouterUnProduitComponent } from './pages/page-ajouter-un-produit/page-ajouter-un-produit.component';
import { PageErreur404Component } from './pages/page-erreur404/page-erreur404.component';
import { BarreDeNavigationComponent } from './components/barre-de-navigation/barre-de-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PageProduitComponent,
    PageConnexionComponent,
    PageAjouterUnProduitComponent,
    PageErreur404Component,
    BarreDeNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
