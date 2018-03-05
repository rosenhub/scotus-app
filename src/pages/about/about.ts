import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public admob: AdMobFree) {
  }

  showBanner() {

    let bannerConfig: AdMobFreeBannerConfig = {
        // isTesting: no, // Remove in production
        autoShow: true,
        overlap: false,
        bannerAtTop: true,
        offsetTopBar: true,
        id: 'ca-app-pub-6494883128831450/1590258392'
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
     this.admob.banner.show()
        // success
    }).catch(e => console.log(e));

}

launchInterstitial() {

    let interstitialConfig: AdMobFreeInterstitialConfig = {
        // isTesting: true, // Remove in production
        autoShow: true,
        id: 'ca-app-pub-6494883128831450/1590258392'
    };

    this.admob.interstitial.config(interstitialConfig);

    this.admob.interstitial.prepare().then(() => {
        // success
      }); 
 } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
