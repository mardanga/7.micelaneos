import { AjustesProvider } from './../../providers/ajustes/ajustes';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name : "Introduccion"
})
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {

  constructor(public navCtrl: NavController, private ajustesSrv: AjustesProvider) {
  }

  slides:any[] = [
  {
    title: "Bienvenido!!!",
    description: "Esta <b>aplicaciÃ³n</b> nos ayudarÃ¡ a comprender muchos temas interesantes en ionic!",
    image: "assets/img/ica-slidebox-img-1.png",
  },
  {
    title: "Â¿QuÃ© es ionic?",
    description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones mÃ³viles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
    image: "assets/img/ica-slidebox-img-2.png",
  },
  {
    title: "Â¿Que hace esta app?",
    description: "Esta aplicaciÃ³n nos ayudarÃ¡ a conocer mÃ¡s sobre el ciclo de vida de un componente y el storage!",
    image: "assets/img/ica-slidebox-img-3.png",
  }
];

  saltarIntro() {
    this.navCtrl.setRoot(HomePage);
    this.ajustesSrv.ajustes.mostrarIntro = false;
    this.ajustesSrv.guardarStorage();
  }


}
