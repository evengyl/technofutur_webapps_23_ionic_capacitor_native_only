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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabbarComponent,
    ActionSheetComponent
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
