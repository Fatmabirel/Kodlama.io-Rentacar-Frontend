import { Component } from '@angular/core';
import { Car } from '../../models/car/cars';
import { CarService } from '../../services/car/car.service';
import { Brand } from '../../models/brands';
import { Color } from '../../models/color/colors';
import { ColorService } from '../../services/color/color.service';
import { BrandService } from '../../services/brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  constructor(
    private CarService: CarService,
    private ColorService: ColorService,
    private BrandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
        this.getBrands();
        this.getColors();
      }else if(params['colorId']){
        this.getCarsByColor(params['colorId']);
        this.getBrands();
        this.getColors();
      }
       else {
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    });
  }

  getCars() {
    this.CarService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByBrand(brandId: number) {
    this.CarService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorId: number) {
    this.CarService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  
  getColors() {
    this.ColorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands() {
    this.BrandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getBrandName(brandId: number): string {
    const brand = this.brands.find((b) => b.brandId === brandId);
    return brand ? brand.name : 'Unknown';
  }

  getColorName(colorId: number): string {
    const color = this.colors.find((c) => c.colorId === colorId);
    return color ? color.name : 'Unknown';
  }
}
