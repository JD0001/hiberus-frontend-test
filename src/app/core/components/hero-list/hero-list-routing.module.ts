import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list.component';

const routes: Routes = [
	{ path: '', component: HeroListComponent },
	{ path: 'create', loadChildren: () => import('@app/shared/dialogs/hero-creation/hero-creation.module').then(m => m.HeroCreationModule) }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HeroListRoutingModule { }
