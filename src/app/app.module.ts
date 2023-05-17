import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { ActionSheetComponent } from './action-sheet/action-sheet.component';
import { AppLauncherComponent } from './app-launcher/app-launcher.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AppControlComponent } from './app-control/app-control.component';
import { CameraComponent } from './camera/camera.component';
import { FileSystemComponent } from './file-system/file-system.component';
import { HapticsComponent } from './haptics/haptics.component';
import { MotionComponent } from './motion/motion.component';
import { NetworkComponent } from './network/network.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { StatusBarComponent } from './status-bar/status-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabbarComponent,
    ActionSheetComponent,
    AppLauncherComponent,
    SideMenuComponent,
    AppControlComponent,
    CameraComponent,
    FileSystemComponent,
    HapticsComponent,
    MotionComponent,
    NetworkComponent,
    PushNotificationsComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
