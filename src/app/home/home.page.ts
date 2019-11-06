import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  info: Array<any> = [
    {
      rutaNumber: '05',
      minutes: '15',
    },
    {
      rutaNumber: 'Azteca',
      minutes: '3',
    },
    {
      rutaNumber: '55',
      minutes: '8',
    },
    {
      rutaNumber: 'Angelopolis',
      minutes: '10',
    },
    {
      rutaNumber: '12',
      minutes: '20',
    }
  ];

  rutasNumbers = ['05', '23', '12', 'Azteca', '55', 'Nueva vision'];
  rutaNumber = '0';
  minutes = 1;
  makeFade = false;
  ad = 0;
  ads = [
    'https://i1.wp.com/yucatantoday.com/wp-content/uploads/2015/11/Mr-Pampas.jpg?resize=800%2C464',
    'https://gazettereview.com/wp-content/uploads/2017/11/walmart-black-friday-2017-preview.png',
    'https://i.ytimg.com/vi/rfU6mM4XyWk/maxresdefault.jpg',
    'http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/05/que-significa-logo-del-oxxo.jpg'
  ];
  constructor( public alertCtrl: AlertController ) {
    setInterval( () => {
      if (this.ad === this.ads.length) {
        this.ad = 0;
      } else {
        this.ad++;
      }
     }, 5000);
  }

  changeValues() {
    this.rutaNumber = this.rutasNumbers[this.generateRandom(0, 6) ];
    this.minutes = this.generateRandom(3, 18);
  }

  generateRandom(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

  async showalert() {
    const alert = await this.alertCtrl.create({
    header: 'Funcionalidad',
    message: 'Esto mostraria una pagina con un mapa indicando cuales son las paradas cercanas al usuario',
    buttons: ['OK'],
    animated: true
    });

    await alert.present();
  }

}
