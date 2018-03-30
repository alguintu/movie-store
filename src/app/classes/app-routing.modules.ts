import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { Preloader } from './preloader.strategy';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }