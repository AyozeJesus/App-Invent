import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/app/models/shipments.model';
import { ShipmentsService } from 'src/app/services/shipments.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './createShipment.component.html',
})
export class AppShipmentCreateComponent implements OnInit {
  data: Shipment[] = [];
  shipmentId: number | null = null;

  newShipment: Shipment = {
    id: 0,
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

  hidden = false;
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

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
