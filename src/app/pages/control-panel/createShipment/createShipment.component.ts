import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/app/models/shipments.model';
import { ShipmentsService } from 'src/app/services/shipments.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './createShipment.component.html',
  styleUrls: ['./createShipment.component.css'],
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
    created_at: new Date(),
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
        window.location.reload();

        console.log('Envío creado con éxito. ID: ' + shipmentId);
      },
      (error) => {
        console.error('Error al crear el envío: ', error);
      }
    );
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
