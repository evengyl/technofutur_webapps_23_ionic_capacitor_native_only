import { Component, OnInit } from '@angular/core'
import { AppLauncher, CanOpenURLResult } from '@capacitor/app-launcher'


@Component({
  selector: 'app-app-launcher',
  templateUrl: './app-launcher.component.html',
  styleUrls: ['./app-launcher.component.scss'],
})
export class AppLauncherComponent  implements OnInit {

  messageActionSheetClicked : string = ""

  constructor() { }

  ngOnInit() {}

  async checkCanOpenUrl()
  {
    const {value} : CanOpenURLResult = await AppLauncher.canOpenUrl({ url: 'com.google.android.youtube' })
  
    this.messageActionSheetClicked = 'Can open app: ' + value
  }


  async checkCanHadApp()
  {
    const {value} : CanOpenURLResult = await AppLauncher.canOpenUrl({ url: 'com.instagram.android' })
  
    this.messageActionSheetClicked = 'Can open app: ' + value
  }

  async openInstagramApp()
  {
    await AppLauncher.openUrl({ url: 'https://play.google.com/store/apps/details?id=com.instagram.android&hl=fr&gl=US' })
  }
  
  async openYoutubeApp()
  {
    await AppLauncher.openUrl({ url: 'com.google.android.youtube' })
  }

  /*
    Attention pour utiliser AppLauncher, il faut indiquer l'url de l'app interne, dans le manifest
    1 : Couper le server
    2 : Ouvrez le folder android -> app -> src -> main -> AndroidManifest.xml
    3 : en enfant de la balise <manifest xmlns:android="http://schemas.android.com/apk/res/android"> ICI </...>
    4 : écrivez la queries suivante : 
        <queries>
          <package android:name="com.google.android.youtube" />
        </queries>
    5 : celle ci est pour permettre l'ouverture de youtube directement en native depuis l'app..
    6 : la CanOpenUrl va surtout vérifier que l'app est présente pour l'ouvrir
    7 : pour récupérer un id d'app pour le manifest, vous pouvez aller sur le playstore depuis un navigateur pc, aller sur l'app 
    et récupérer dans l'url "https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=fr&gl=US"
    la partie "com.google.android.youtube"
    8 : pour mettre plusieurs queries app luncher, vous devez rajouter un tag queries package etc voir point 4
  */

}
