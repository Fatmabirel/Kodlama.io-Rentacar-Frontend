import { Component } from '@angular/core';
import { Rental } from '../../models/rental/rental';
import { RentalService } from '../../services/rental/rental.service';
import { Customer } from '../../models/customer/customers';
import { Brand } from '../../models/brands';
import { CustomerService } from '../../services/customer/customer.service';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css',
})
export class RentalComponent {
  rentals: Rental[] = [];
  customers: Customer[] = [];
  brands: Brand[] = [];

  constructor(
    private RentalService: RentalService,
    private CustomerService: CustomerService,
    private BrandService: BrandService
  ) {}

  ngOnInit(): void {
    this.getRentals();
    this.getBrands();
    this.getCustomers();
  }

  getRentals() {
    this.RentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
  getBrands() {
    this.BrandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getCustomers() {
    this.CustomerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  getCustomerName(userId: number): string {
    const customer = this.customers.find(c => c.userId === userId);
    return customer ? `${customer.companyName}` : 'Unknown';
  }

  getBrandName(brandId: number): string {
    const brand = this.brands.find(b => b.brandId === brandId);
    return brand ? brand.name : 'Unknown';
  }

}
