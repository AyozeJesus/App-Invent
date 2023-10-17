import { Component, OnInit } from '@angular/core';
import { CarriersService } from 'src/app/services/carriers.service';
import { Carrier } from 'src/app/models/carriers.model';

@Component({
  selector: 'app-list-carrier',
  templateUrl: './listCarrier.component.html',
  styleUrls: ['./listCarrier.component.css'],
})
export class AppCarrierComponent implements OnInit {
  carriers: Carrier[] = [];
  selectedCarrier: Carrier | null = null;
  newCarrier: Carrier = { name: '', id: -1 };

  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private carriersService: CarriersService) {}

  ngOnInit(): void {
    this.loadCarriers();
  }

  loadCarriers() {
    this.carriersService.listCarriers().subscribe((carriers) => {
      this.carriers = carriers;
    });
  }

  selectCarrier(carrier: Carrier) {
    this.selectedCarrier = carrier;
  }

  editCarrier(carrier: Carrier) {
    if (this.selectedCarrier === carrier) {
      this.selectedCarrier = null;
    } else {
      this.selectedCarrier = carrier;
    }
  }

  saveCarrierChanges(carrier: Carrier) {
    if (carrier.id && this.selectedCarrier) {
      this.carriersService
        .updateCarrier(this.selectedCarrier.id, this.selectedCarrier)
        .subscribe(() => {
          this.selectedCarrier = null;
          this.loadCarriers();
        });
    }
  }

  createCarrier() {
    if (this.newCarrier.name) {
      this.carriersService.createCarrier(this.newCarrier).subscribe(() => {
        this.newCarrier.name = '';
        this.newCarrier.id = -1;
        this.loadCarriers();
      });
    }
  }

  deleteCarrier(id: number) {
    if (
      id &&
      confirm('¿Estás seguro de que deseas eliminar este transportista?')
    ) {
      this.carriersService.deleteCarrier(id).subscribe(() => {
        this.loadCarriers();
      });
    }
  }
}
