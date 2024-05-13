import { Component } from '@angular/core';
import { Color } from '../../models/color/colors';
import { ColorService } from '../../services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class ColorComponent {
  colors: Color[] = [];

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
