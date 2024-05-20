import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrl: './brand-update.component.css'
})
export class BrandUpdateComponent {
  brandAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  addBrand() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigate(['/']);
        },
        (responseError) => {
          this.toastrService.error(responseError.message, 'Hata');
        }
      );
    }
  }
}
