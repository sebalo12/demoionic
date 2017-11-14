import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { SlidesPage } from '../slides/slides';
import { WebviewPage } from '../webview/webview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists:any[] = [];

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  public prueba = {
    nombre: 'Sebastian',
    apellido: "Schanz",
    edad: 31
  }

  constructor(public navCtrl: NavController) {
    this.lists.push({
      name: 'Sebastian'
    });
    this.lists.push({
      name: 'ALEJO'
    })
    this.lists.push({
      name: 'Lorena'
    })
    this.lists.push({
      name: 'Luciana'
    })

    
  }
  

  goToUsersPage(){
    this.navCtrl.push(UsersPage);

  }

  goToSlidesPage(){
    this.navCtrl.push(SlidesPage);
  }

  goToWebviewPage(){
    this.navCtrl.push(WebviewPage);
  }
}
