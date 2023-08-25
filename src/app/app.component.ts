import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Arreglo de datos traidos desde el back o Firebase
  items: any[] = [
    { nombre: 'Manzana', categoria: 'frutas' },
    { nombre: 'Zanahoria', categoria: 'verduras' },
    { nombre: 'Banana', categoria: 'frutas' },
    { nombre: 'Lechuga', categoria: 'verduras' }
  ];
  //filteredItems es para recorrer en el html
  filteredItems: any[] = this.items;

  applyFilter(selectedCategory: any) {
    let value = selectedCategory.target.value; // Obtenemos el valor
    if (value === 'todos') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => item.categoria === value);
    }
  }

}
