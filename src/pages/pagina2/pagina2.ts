import { Component } from '@angular/core';
import {LoadingController, NavController,  AlertController} from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  irPagina3() {
    this.navCtrl.push("mi-pagina3");
  }

  volverHome() {
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
    let promesa = new Promise((resolve, reject) => {
      let prompt = this.alertCtrl.create({
        title: 'Pagina 3',
        message: "Desea continuar a la pagina 3",
        buttons: [
          {
            text: 'No',
            handler: data => {
              resolve(false);
            }
          },
          {
            text: 'Si',
            handler: data => {
              resolve(true);
            }
          }
        ]
      });
      prompt.present();
    });

    return promesa;
  }

  ionViewCanLeave() {
    
    let loader = this.loadingCtrl.create({
      content: "Saliendo...",
    });
    loader.present();

    setTimeout(function() {
      loader.dismiss();
    }, 3000);
  }
  

}
