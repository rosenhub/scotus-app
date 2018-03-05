import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { VerticalTimeLine } from '../../components/verticaltimeline/verticaltimeline';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the LandmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landmarks',
  templateUrl: 'landmarks.html',
})
export class LandmarksPage {

  timelinedata:any = [
    {
      border: false,
      icon: 'university',
      left: {
        date: '1451',
        title: 'Iroquois',
        content: 'The Iroquois Confederacy is formed'
      }
    },
    {
      border: true,
      icon: 'gavel',
      left: {
        date: '1812',
        title: 'War',
        content: 'US invades Canada'
      },
      right: {
        date: '1814',
        title: 'Victory',
        content: 'Canada defeats the US.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      right: {
        date: '1534',
        title: 'French Exploration',
        content: 'Jacques Cartier first explores the St. Lawrence region'
      }
    },
    {
      border: true,
      icon: 'users',
      left: {
        date: '1812',
        title: 'War',
        content: 'US invades Canada'
      },
      right: {
        date: '1814',
        title: 'Victory',
        content: 'Canada defeats the US.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      left: {
        date: '1867',
        title: 'Confederation',
        content: 'first four provinces: Québec, Ontario, N.S., and N.B.'
      }
    },
    {
      border: true,
      icon: 'users',
      left: {
        date: '1812',
        title: 'War',
        content: 'US invades Canada'
      },
      right: {
        date: '1814',
        title: 'Victory',
        content: 'Canada defeats the US.'
      }
    }

  ];


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

}
