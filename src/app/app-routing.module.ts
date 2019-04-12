import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'hell', loadChildren: './hell/hell.module#HellPageModule' },
  { path: 'hell/:layer', loadChildren: './hell/hell.module#HellPageModule' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '404', loadChildren: './404/404.module#Page404Module' }
];

@NgModule
({
  imports:
  [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
