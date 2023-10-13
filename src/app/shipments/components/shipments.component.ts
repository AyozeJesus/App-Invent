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
  selectedShipment: Shipment | null = null;
  showNotFoundMessage: boolean = false;
  showInvalidInputMessage = false;

  newShipment: Shipment = {
    // Propiedad para almacenar los detalles del nuevo envío
    id: 0, // Puedes establecerlo en 0 o null, ya que se asignará en el servidor
    destination_address: '',
    postal_code: '',
    recipient_name: '',
    sender_name: '',
    weight_kg: 0,
    shipping_company: '',
    package_category: '',
    price: 0,
  };

  constructor(private shipmentService: ShipmentsService) {}

  ngOnInit(): void {
    this.getAllShipments();
  }

  getAllShipments() {
    this.shipmentService.listShipments().subscribe((shipments) => {
      this.data = shipments;
    });
  }

  createShipment() {
    this.shipmentService.createShipment(this.newShipment).subscribe(
      (shipmentId) => {
        console.log('Envío creado con éxito. ID: ' + shipmentId);
        // Puedes realizar alguna acción adicional aquí, como limpiar el formulario.
      },
      (error) => {
        console.error('Error al crear el envío: ', error);
      }
    );
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
