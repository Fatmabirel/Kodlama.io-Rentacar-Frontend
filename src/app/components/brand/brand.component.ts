import { Component } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brands';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent {
  brands: Brand[] = [];
  currentBrand: Brand;
  filterText:string = "";
  constructor(private BrandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.BrandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  setCurrentBrand(brand: Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item list-group-item-primary"
    }else{
      return "list-group-item"
    }
  }

}
