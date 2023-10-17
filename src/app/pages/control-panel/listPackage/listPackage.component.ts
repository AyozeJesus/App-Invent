import { Component } from '@angular/core';

@Component({
  selector: 'app-package-list',
  templateUrl: './listPackage.component.html',
  styleUrls: ['./listPackage.component.css'],
})
export class AppPackageListComponent {
  packageColumns: string[] = ['packageType', 'weightRange', 'priceFormula'];
  displayedColumns: string[] = ['packageType', 'weightRange', 'priceFormula'];
  packageData = [
    {
      type: 'Paquete ultra ligero',
      weightRange: '0 < kg ≤ 0.1',
      priceFormula: 'Precio = kg * 5',
    },
    {
      type: 'Paquete ligero',
      weightRange: '0.1 < kg ≤ 0.3',
      priceFormula: 'Precio = kg * 5 + 1',
    },
    {
      type: 'Paquete estándar',
      weightRange: '0.3 < kg ≤ 5',
      priceFormula: 'Precio = kg * 10',
    },
    {
      type: 'Paquete pesado',
      weightRange: '5 < kg ≤ 10',
      priceFormula: 'Precio = kg * 5 + kg + 75',
    },
    {
      type: 'Gran volumen',
      weightRange: '10 < kg ≤ ∞',
      priceFormula: 'Precio = (kg - 10) × 7.5 + 130 + kg',
    },
  ];
}
