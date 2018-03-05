import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService, public admob: AdMobFree) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
      this.tab4Title = values['TAB4_TITLE'];
    });
    }

    showBanner() {

      let bannerConfig: AdMobFreeBannerConfig = {
          isTesting: true, // Remove in production
          autoShow: true,
          overlap: true
          // bannerAtTop: true,
          // offsetTopBar: true
          //id: Your Ad Unit ID goes here
      };
  
      this.admob.banner.config(bannerConfig);
  
      this.admob.banner.prepare().then(() => {
       this.admob.banner.show()
          // success
      }).catch(e => console.log(e));
  
    };
  
  launchInterstitial() {
  
      let interstitialConfig: AdMobFreeInterstitialConfig = {
          isTesting: true, // Remove in production
          autoShow: true
          //id: Your Ad Unit ID goes here
      };
  
      this.admob.interstitial.config(interstitialConfig);
  
      this.admob.interstitial.prepare().then(() => {
          // success
        }); 
    };
  }