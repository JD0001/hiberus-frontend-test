import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HeroListRoutingModule } from './hero-list-routing.module';
import { HeroListComponent } from './hero-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
	declarations: [
		HeroListComponent
	],
	imports: [
		CommonModule,
		HeroListRoutingModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatDialogModule,
		MatIconModule
	],
	exports: [
		HeroListComponent
	],
	bootstrap: [],
})
export class HeroListModule { }
