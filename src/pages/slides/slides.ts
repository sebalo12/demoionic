import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the SlidesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  developers = [];
  developer = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private databaseProvider: DatabaseProvider) {
    this.databaseProvider.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.loadDeveloperData();
      }
    })
  }

  loadDeveloperData(){
    this.databaseProvider.getAllDevelopers().then(data => {
      this.developers = data;
    })
  }

  addDeveloper(){

    this.databaseProvider.addDeveloper(this.developer["name"],this.developer["skill"], parseInt(this.developer["yearsOfExperience"]))
    .then(data => {
      this.loadDeveloperData();
    });
    this.developer = {};

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }

}
