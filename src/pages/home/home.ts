import { Pagina2Page } from './../pagina2/pagina2';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pagina2 = Pagina2Page
  constructor(public navCtrl: NavController) {

  }

}
