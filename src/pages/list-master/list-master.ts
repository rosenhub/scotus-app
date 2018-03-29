import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public admob: AdMobFree) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  // ionViewDidLoad() {
  // }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  nothing() {
    alert('Menu here...');
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

//   showBanner() {

//     let bannerConfig: AdMobFreeBannerConfig = {
//         // isTesting: no, // Remove in production
//         autoShow: true,
//         overlap: false,
//         bannerAtTop: true,
//         offsetTopBar: true,
//         id: 'ca-app-pub-6494883128831450/1590258392'
//     };

//     this.admob.banner.config(bannerConfig);

//     this.admob.banner.prepare().then(() => {
//      this.admob.banner.show()
//         // success
//     }).catch(e => console.log(e));

// }

// launchInterstitial() {

//     let interstitialConfig: AdMobFreeInterstitialConfig = {
//         // isTesting: true, // Remove in production
//         autoShow: true,
//         id: 'ca-app-pub-6494883128831450/1590258392'
//     };

//     this.admob.interstitial.config(interstitialConfig);

//     this.admob.interstitial.prepare().then(() => {
//         // success
//       }); 
//  } 

//   ionViewDidLoad() {
//     let interstitialConfig: AdMobFreeInterstitialConfig = {
//       // isTesting: true, // Remove in production
//       autoShow: true,
//       id: 'ca-app-pub-6494883128831450/1590258392'
//   };
//   this.admob.interstitial.config(interstitialConfig);

//   this.admob.interstitial.prepare().then(() => {
//       // success
//     }); 
//   }
}
