import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  selectedBrandId: number;
  selectedColorId: number;
  filterText: string = "";

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsByBrandAndColor(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
      }
      this.getBrands();
      this.getColors();
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrandAndColor(brandId: number, colorId: number) {
    this.carService.getCarsByBrandAndColor(brandId, colorId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
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
