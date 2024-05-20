import { Component } from '@angular/core';
import { Brand } from '../../models/brands';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css'
})
export class BrandListComponent {
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

}
