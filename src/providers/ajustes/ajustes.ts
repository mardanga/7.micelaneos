import {Storage} from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrarIntro : true
  };

  constructor(private platform: Platform,
              private storage: Storage) {
    
  }

  cargarStorage(){

    let promesa = new Promise( (resolve,reject) => {
      if(this.platform.is('cordova')){
        this.storage.ready().then(
          () =>
            {
              this.storage.get("ajustes").then( (val) => { 
                if(val){
                  this.ajustes = val 
                } 
                resolve();
              });
            }
        );
      }
      else{
        console.log(localStorage.getItem("ajustes"));
        if(localStorage.getItem("ajustes")){
          this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
        }
      }

      resolve();

    });

    return promesa;
  }

  guardarStorage(){
    if(this.platform.is('cordova')){
      this.storage.ready().then(
          () =>
            {
              this.storage.set("ajustes",this.ajustes) ;
            }
        );
    }
    else{
      
      localStorage.setItem("ajustes",JSON.stringify(this.ajustes));
      
    }
  }
}
