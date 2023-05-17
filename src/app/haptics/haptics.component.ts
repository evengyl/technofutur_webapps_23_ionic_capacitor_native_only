import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';


@Component({
  selector: 'app-haptics',
  templateUrl: './haptics.component.html',
  styleUrls: ['./haptics.component.scss'],
})
export class HapticsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  async impact(impacter)
  {
    if(impacter == 1)
      await Haptics.impact({ style : ImpactStyle.Light })
    
    if(impacter == 2)
      await Haptics.impact({ style : ImpactStyle.Medium })
    
    if(impacter == 3)
      await Haptics.impact({ style : ImpactStyle.Heavy })
  }

  async notification()
  {
    await Haptics.notification({ type : NotificationType.Success }).then(_ => {
      console.log("notification haptics")
    })
  }

  async vibrate()
  {
    await Haptics.vibrate({ duration : 2000 })
  }

  /* Pour le moment BEUHHHHH ???? */
  async selectionStart()
  {
    await Haptics.impact({ style : ImpactStyle.Light })
    await Haptics.selectionStart().then((res) => {
      console.log(res)
    })
  }

  /* Pour le moment BEUHHHHH ???? */
  async selectionChanged()
  {
    await Haptics.impact({ style : ImpactStyle.Light })
    await Haptics.selectionChanged().then((res) => {
      console.log(res)
    })
  }


  /* Pour le moment BEUHHHHH ???? */
  async selectionEnd()
  {
    await Haptics.impact({ style : ImpactStyle.Light })
    await Haptics.selectionEnd().then((res) => {
      console.log(res)
    })
  }

}
