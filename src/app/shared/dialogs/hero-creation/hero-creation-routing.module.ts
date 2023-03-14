import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCreationComponent } from './hero-creation.component';

const routes: Routes = [{ path: '', component: HeroCreationComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HeroCreationRoutingModule { }
