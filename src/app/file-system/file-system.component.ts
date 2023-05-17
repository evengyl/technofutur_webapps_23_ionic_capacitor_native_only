import { Component, OnInit } from '@angular/core'
import { Filesystem, Directory, Encoding, WriteFileResult } from '@capacitor/filesystem'


@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss'],
})
export class FileSystemComponent  implements OnInit {

  /*
    aller dans le manifest, pour savoir ou il est, voir le compo AppLauncher !!!
    et encoder ceci (attention lower android 9 or equal)
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  */
  constructor() { }

  ngOnInit() {}


  async writeSecretFile()
  {
    let resultWriteDocuments : WriteFileResult = await Filesystem.writeFile({
      path: 'Documents/text.txt',
      data: 'This is a test',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
      recursive : true
    })


    await Filesystem.writeFile({
      path: 'Cache/text.txt',
      data: 'This is a test',
      directory: Directory.Cache,
      encoding: Encoding.UTF8,
      recursive : true
    })


    await Filesystem.writeFile({
      path: 'External/text.txt',
      data: 'This is a test',
      directory: Directory.External,
      encoding: Encoding.UTF8,
      recursive : true
    })

    await Filesystem.writeFile({
      path: 'Data/text.txt',
      data: 'This is a test',
      directory: Directory.Data,
      encoding: Encoding.UTF8,
      recursive : true
    })


    await Filesystem.writeFile({
      path: 'Library/text.txt',
      data: 'This is a test',
      directory: Directory.Library,
      encoding: Encoding.UTF8,
      recursive : true
    })


    /* surement pour tout ce qui est memory card */
    // await Filesystem.writeFile({
    //   path: 'secrets/text.txt',
    //   data: 'This is a test',
    //   directory: Directory.ExternalStorage,
    //   encoding: Encoding.UTF8,
    //   recursive : true
    // })

  }
  
  async readSecretFile()
  {
    const contents = await Filesystem.readFile({
      path: 'DocumentsDocuments/text.txt',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    })
  
    console.log('secrets:', contents)
  }
  
  async deleteSecretFile()
  {
    await Filesystem.deleteFile({
      path: 'DocumentsDocuments/text.txt',
      directory: Directory.Documents,
    })
  }

  async statFileSystem()
  {
    await Filesystem.stat({
      path : "/",
      directory : Directory.External   //"file:///storage/emulated/0/Android/data/io.ionic.starter/files/."
    }).then((resStat) => {
      console.log(resStat)
    })
  }
  

}
