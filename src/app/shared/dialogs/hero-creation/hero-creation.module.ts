import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroCreationRoutingModule } from './hero-creation-routing.module';
import { HeroCreationComponent } from './hero-creation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
	declarations: [
		HeroCreationComponent
	],
	imports: [
		CommonModule,
		HeroCreationRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatButtonModule,
		MatDialogModule,
		TranslateModule.forChild({
			extend: true
		})

	]
})
export class HeroCreationModule { }
