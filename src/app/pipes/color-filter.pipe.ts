import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color/colors';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterText: string): Color[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText
      ? value.filter(
          (c: Color) =>
            c.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value; // Eğer filtre metni yoksa, tüm ürünleri döndür
  } 

}
