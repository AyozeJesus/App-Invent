import { NgModule } from '@angular/core';
// Material Form Controls
import { MatInputModule } from '@angular/material/input';

// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';

import { MatListModule } from '@angular/material/list';

import { MatTabsModule } from '@angular/material/tabs';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Material Popups & Modals

import { MatDialogModule } from '@angular/material/dialog';

// Material Data tables

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  exports: [
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
  ],
})
export class MaterialModule {}
