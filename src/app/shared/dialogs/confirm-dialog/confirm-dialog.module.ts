import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogRoutingModule } from './confirm-dialog-routing.module';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
	declarations: [
		ConfirmDialogComponent
	],
	imports: [
		CommonModule,
		ConfirmDialogRoutingModule,
		FormsModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatFormFieldModule,
		TranslateModule.forChild({
			extend: true
		})
	]
})
export class ConfirmDialogModule { }
