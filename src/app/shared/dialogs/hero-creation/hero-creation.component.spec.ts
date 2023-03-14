import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCreationComponent } from './hero-creation.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroCreationComponent', () => {
	let component: HeroCreationComponent;
	let fixture: ComponentFixture<HeroCreationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeroCreationComponent],
			imports: [
				MatInputModule,
				HttpClientModule,
				MatDialogModule,
				FormsModule,
				MatFormFieldModule,
				MatCardModule,
				ReactiveFormsModule,
				BrowserAnimationsModule
			],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: [] },
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(HeroCreationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
