import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
	{ path: 'main', loadChildren: () => import('@app/core/components/main/main.module').then(m => m.MainModule) },
	{ path: 'heroes', loadChildren: () => import('@app/core/components/hero-list/hero-list.module').then(m => m.HeroListModule) },
	{ path: 'create', loadChildren: () => import('./shared/dialogs/confirm-dialog/confirm-dialog.module').then(m => m.ConfirmDialogModule) },
	{ path: 'loader', loadChildren: () => import('./shared/components/loader/loader.module').then(m => m.LoaderModule) }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
