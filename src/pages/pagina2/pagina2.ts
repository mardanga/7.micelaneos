import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(){
    this.navCtrl.push("mi-pagina3");
  }

  volverHome(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }

  ionViewWillUnload() {
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter() {
    console.log("ionViewCanEnter");
  }

  ionViewCanLeave() {
    console.log("ionViewCanLeave");
  }

}
