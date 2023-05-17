import { Component, OnInit } from '@angular/core'
import { ActionSheet, ActionSheetButtonStyle, ShowActionsResult } from '@capacitor/action-sheet'

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
})
export class ActionSheetComponent  implements OnInit {


  messageActionSheetClicked : string = ""

  constructor() { }

  ngOnInit() {}

  async myShowActions()
  {
    const resultActionSheet : ShowActionsResult = await ActionSheet.showActions({
      title: 'Test Options',
      message: 'This sub message is only supported on IOS',
      options: [
        {
          title: 'Option 1',
          style: ActionSheetButtonStyle.Default,
          icon : "logo-apple"
        },
        {
          title: 'Option 2',
          style: ActionSheetButtonStyle.Default,
          icon : "logo-apple"
        },
        {
          title: 'Option 3',
          style: ActionSheetButtonStyle.Default,
          icon : "logo-apple"
        },
        {
          title: 'Cancel',
          style: ActionSheetButtonStyle.Default,
        }
      ],
    })
  
    console.log('Action Sheet result:', resultActionSheet)

    switch(resultActionSheet.index)
    {
      case 0 : {
        this.messageActionSheetClicked = "Option 1 cliquée index 0"
        break
      }

      case 1 : {
        this.messageActionSheetClicked = "Option 2 cliquée index 1"
        break
      }

      case 2 : {
        this.messageActionSheetClicked = "Option 3 cliquée index 2"
        break
      }

      case 3 : {
        this.messageActionSheetClicked = "Aucune option cliquée"
        break
      }
    }


  }

}
