import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderRoutingModule } from './loader-routing.module';
import { LoaderComponent } from './loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [
		LoaderComponent
	],
	imports: [
		CommonModule,
		LoaderRoutingModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatIconModule,
		TranslateModule.forChild({
			extend: true
		})
	],
	exports: [
		LoaderComponent
	]
})
export class LoaderModule { }
