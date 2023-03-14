import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroListComponent', () => {
	let component: HeroListComponent;
	let fixture: ComponentFixture<HeroListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeroListComponent],
			imports: [
				HttpClientModule, 
				MatDialogModule, 
				MatIconModule, 
				MatCardModule,
				MatFormFieldModule,
				MatPaginatorModule,
				MatTableModule,
				FormsModule,
				MatInputModule,
				BrowserAnimationsModule
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(HeroListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
