import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterUnProduitComponent } from './page-ajouter-un-produit.component';

describe('PageAjouterUnProduitComponent', () => {
  let component: PageAjouterUnProduitComponent;
  let fixture: ComponentFixture<PageAjouterUnProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAjouterUnProduitComponent]
    });
    fixture = TestBed.createComponent(PageAjouterUnProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
