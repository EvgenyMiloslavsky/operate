import {Component} from '@angular/core';

interface Color {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  colors: Color[] = [
    {id: 1, name: "Red", color: "red"},
    {id: 2, name: "Blue", color: "blue"},
    {id: 3, name: "White", color: "white"},
    {id: 4, name: "Green", color: "green"},
    {id: 5, name: "Yellow", color: "yellow"}
  ]
  currentColor: string = "";
  currentId: number = 0;
  display: boolean = false;
  colorDisplay: boolean = false;
  newColor: string = "";
  newColorName: string = "";

  toggleDialog(id: number, color: string): void {
    this.currentColor = color;
    this.currentId = id - 1;
    this.display = true;
  }

  onRandomSelect(): void {
    const newObject = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.colors[this.currentId] = {...this.colors[this.currentId], name: newObject.name, color: newObject.color}
  }

  onClose(type: string): void {
    type === "random" ? this.display = false : this.colorDisplay = false;
  }

  openCreateForm():void {
    this.colorDisplay = true;
  }

  createNewColor():void {
    const newColor = {id: this.colors.length + 1, name: this.newColorName, color: this.newColor};
    this.colors = [...this.colors, newColor];
  }
}
