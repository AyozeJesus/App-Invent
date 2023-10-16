import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/app/models/shipments.model';
import { ShipmentsService } from 'src/app/services/shipments.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './listShipment.component.html',
})
export class AppShipmentListComponent implements OnInit {
  shipmentId: number | null = null;
  selectedShipment: Shipment[] | null = null;
  showNotFoundMessage: boolean = false;
  showInvalidInputMessage = false;
  showAll: boolean = false;
  data: Shipment[] = [];

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

  getShipmentById(id: number) {
    this.shipmentService.getShipmentById(id).subscribe({
      next: (shipment: Shipment | null) => {
        if (shipment) {
          this.selectedShipment = [shipment];
          console.log('selectedShipment:', this.selectedShipment);
          console.log('shipment:', shipment);

          this.showNotFoundMessage = false;
        } else {
          this.selectedShipment = null;
          this.showNotFoundMessage = true;
        }
      },
      error: (error) => {
        console.error(error);
        this.selectedShipment = null;
        this.showNotFoundMessage = true;
      },
    });
  }

  searchShipment() {
    if (this.shipmentId !== null) {
      this.getShipmentById(this.shipmentId);
      this.shipmentId = null;
    } else {
      this.selectedShipment = null;
      this.showNotFoundMessage = true;
    }
  }

  showAllShipments() {
    this.showAll = true;
  }

  deleteShipment(id: number) {
    if (
      id !== null &&
      confirm('¿Estás seguro de que deseas eliminar este envío?')
    ) {
      this.shipmentService.deleteShipment(id).subscribe(
        () => {
          console.log('Envío eliminado con éxito. ID: ' + id);
          // También puedes realizar alguna acción adicional después de eliminar el envío.
        },
        (error) => {
          console.error('Error al eliminar el envío: ', error);
        }
      );
    } else {
      console.error('No se puede eliminar el envío porque id es null.');
    }
  }

  toggleAllShipments() {
    this.showAll = !this.showAll;
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
