import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brands';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], filterText: string): Brand[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText
      ? value.filter(
          (b: Brand) =>
            b.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value; // Eğer filtre metni yoksa, tüm ürünleri döndür
  } 

}
