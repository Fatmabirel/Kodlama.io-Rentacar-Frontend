import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { BrandService } from '../../services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrl: './brand-update.component.css',
})
export class BrandUpdateComponent {
  brandUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  updateBrand() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.updateBrand(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigate(['/brands/list']);
        },
        (responseError) => {
          this.toastrService.error(responseError.message, 'Hata');
        }
      );
    }
  }
}
