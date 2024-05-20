import { Component } from '@angular/core';
import { CarDetail } from '../../models/car-detail/car-detail';
import { CarDetailService } from '../../services/car-detail/car-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent {
  carDetails:CarDetail[]=[] ; // Tek bir nesne olduğu için dizi tanımı kaldırıldı

  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
      } 
    });
  }

  getCarDetailsById(carId: number) {
    this.carDetailService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetails = [response.data];
      console.log(this.carDetails);
    });

  }
}
