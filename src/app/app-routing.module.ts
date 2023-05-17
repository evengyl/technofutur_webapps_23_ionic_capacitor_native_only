import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionSheetComponent } from './action-sheet/action-sheet.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "home", component : HomeComponent},
  { path : "actionsheet", component : ActionSheetComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
