import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { Hero } from '../pojos/Hero';
import { HeroFilter } from '../pojos/HeroFilter';

describe('HeroService', () => {
	let service: HeroService;

	const heroExample: Hero = {id:0,alias:'',name:'',country:''};

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
				LoggerModule.forRoot({
					serverLoggingUrl: 'api/logs',
					level: NgxLoggerLevel.DEBUG,
					serverLogLevel: NgxLoggerLevel.INFO
				})
			],
			providers: [HttpClient]
		});
		service = TestBed.inject(HeroService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return the hero 3', (done) => {
		const testID = 3; //Anthony Stark
		service.get(testID).subscribe(data => {
			expect(typeof data).toBe(typeof heroExample);
			expect(data.name).toBe('Anthony Stark');

			done();
		});
	});

	it('should return heroes filtering their name with \'Ro\'', (done) => {
		const text = 'Ro';
		service.getByNameWith(text).subscribe(data => {  
			data.forEach((hero)=>{
				expect(typeof hero).toBe(typeof heroExample);
				expect(hero.name).toContain(text);
			});
      
			done();
		});
	});

	it('should return the heroes filtered by country \'US\' and alias containing \'an\'', (done)=>{
		const heroFilter: HeroFilter = {alias:'an',country:'US', name:''};
		service.getByFilter(heroFilter).subscribe(data => {  
			data.forEach((hero)=>{
				expect(typeof hero).toBe(typeof heroExample);
				expect(hero.alias).toContain(heroFilter.alias);
				expect(hero.country).toBe(heroFilter.country);
			});
      
			done();
		});

	});

	it('should delete the hero 6', (done) => {
		const testID = 6; //Black Phanter
		service.deleteByID(testID).subscribe((data) => {
			console.log('Hero 6', data);
      
			expect(typeof data).toBe('HttpResponse');

			//const returnCode = data.status === 200 || data.status === 204;
			//expect(returnCode).toBe(true);
      
			done();
		});
	});

	it('should update the hero Country', (done)=>{
		const randCountry = 'Krakozhia';
		const hero = {id:1, alias: 'Captain America', name: 'Steve Rogers', country: randCountry};
		service.update(hero).subscribe((data)=>{
			expect(typeof data).toBe(typeof heroExample);
			expect(data.country).toBe(randCountry);

			done();
		});

	});
});

