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
  currentColor : Color;
  filterText:string = "";

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  setCurrentColor(color: Color){
    this.currentColor = color;
  }

  setCurrentColorClass(color: Color){
    if(this.currentColor == color){
      return "list-group-item list-group-item-info"
    }else{
      return "list-group-item "
    }
  }
}
