import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from '../../services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrl: './brand-delete.component.css'
})
export class BrandDeleteComponent {
  brandDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandDeleteForm();
  }

  createBrandDeleteForm() {
    this.brandDeleteForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  deleteBrand() {
    if (this.brandDeleteForm.valid) {
      let brandModel = Object.assign({}, this.brandDeleteForm.value);
      this.brandService.deleteBrand(brandModel).subscribe(
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
