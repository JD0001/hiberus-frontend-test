import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeroListModule } from './core/components/hero-list/hero-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from '@app/shared/components/loader/loader.module';
import { LoaderInterceptor } from '@app/shared/interceptors/loader.interceptor';
import { NgxTranslatorModule } from '@app/shared/modules/translator/translate.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		HeroListModule,
		LoaderModule,
		NgxTranslatorModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: LoaderInterceptor,
		multi: true,
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
