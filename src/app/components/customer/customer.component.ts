import { Component } from '@angular/core';
import { Customer } from '../../models/customer/customers';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customers: Customer[] = [];
  constructor(private CustomerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.CustomerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
}
