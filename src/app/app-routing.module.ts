import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionSheetComponent } from './action-sheet/action-sheet.component';
import { AppLauncherComponent } from './app-launcher/app-launcher.component';
import { HapticsComponent } from './haptics/haptics.component';
import { FileSystemComponent } from './file-system/file-system.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "home", component : HomeComponent},
  { path : "actionsheet", component : ActionSheetComponent},
  { path : "applauncher", component : AppLauncherComponent},
  { path : "haptics", component : HapticsComponent},
  { path : "filesystem", component : FileSystemComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
