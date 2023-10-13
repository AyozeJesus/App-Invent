import { Component, OnInit } from '@angular/core';
import { Shipment } from '../../models/shipments.model';
import { ShipmentsService } from '../service/shipments.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css'],
})
export class ShipmentsComponent implements OnInit {
  data: Shipment[] = [];
  shipmentId: number | null = null;
  showAll: boolean = false;
  selectedShipment: Shipment | null = null; // Variable para almacenar el envío seleccionado
  showNotFoundMessage: boolean = false;
  showInvalidInputMessage = false;

  constructor(private shipmentService: ShipmentsService) {}

  ngOnInit(): void {
    this.getAllShipments();
  }

  getAllShipments() {
    this.shipmentService.listShipments().subscribe((shipments) => {
      this.data = shipments;
    });
  }

  isValidShipmentId(id: number): boolean {
    // Verifica si es un número entero positivo
    return Number.isInteger(id) && id > 0;
  }
  searchShipment() {
    if (this.shipmentId !== null) {
      this.getShipmentById(this.shipmentId);
      this.shipmentId = null; // Establece el campo de búsqueda en null
    } else {
      this.selectedShipment = null;
      this.showNotFoundMessage = true;
    }
  }

  getShipmentById(id: number) {
    this.shipmentService.getShipmentById(id).subscribe(
      (shipment) => {
        if (shipment) {
          this.selectedShipment = shipment; // Asigna un arreglo con un solo envío
          console.log(this.selectedShipment);

          this.showNotFoundMessage = false;
        } else {
          this.selectedShipment = null;
          this.showNotFoundMessage = true;
        }
      },
      (error) => {
        console.error(error);
        this.selectedShipment = null;
        this.showNotFoundMessage = true;
      }
    );
  }

  showAllShipments() {
    this.showAll = true;
  }

  toggleAllShipments() {
    this.showAll = !this.showAll;
  }
}
