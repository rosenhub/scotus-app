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
        date: '1789',
        title: 'Founded',
        content: 'The Supreme Court Of The United States was founded by Congress under Article III of the US Constitution.'
      }
    },
    {
      border: false,
      icon: 'user',
      right: {
        date: '1789',
        title: 'Appointed',
        content: 'President George Washington appoints John Jay as the first Justice of the Supreme Court.'
      }
    },
    {
      border: false,
      icon: 'gavel',
      left: {
        date: '1801',
        title: 'Appointed',
        content: 'John Marshall is appointed to the Court by President John Adams.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      right: {
        date: '1803',
        title: 'Marbury v. Madison (7-0)',
        content: 'Established the Court\'s power of judicial review over congress.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      left: {
        date: '1819',
        title: 'McCullough v. Maryland (7-0)',
        content: 'Established the federal government\s implied power over the States.'
      }
    },
    {
      border: false,
      icon: 'gavel',
      right: {
        date: '1801',
        title: 'Appointed',
        content: 'Roger Brooke Taney is appointed by President Andrew Jackson.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      left: {
        date: '1857',
        title: 'Dred Scott v. Sandford (7-2)',
        content: 'Denied the rights of US citizenship to African American slaves.'
      }
    },
    {
      border: false,
      icon: 'gavel',
      right: {
        date: '1864',
        title: 'Appointed',
        content: 'Salmon Portland Chase appointed by President Abraham Lincoln.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      left: {
        date: '1896',
        title: 'Plessy v. Ferguson (7-1)',
        content: 'Upheld the \'seperate but equal\' segregation laws.'
      }
    },
    {
      border: false,
      icon: 'gavel',
      right: {
        date: '1921',
        title: 'Appointed',
        content: 'Former President William Howard Taft by President William Harding.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      left: {
        date: '1944',
        title: 'Korematsu v. United States (6-3)',
        content: 'Upheld internment of Japanese Americans during World War II.'
      }
    },
    {
      border: false,
      icon: 'gavel',
      right: {
        date: '1953',
        title: 'Appointed',
        content: 'Earl Warren appointed by President Dwight D. Eisenhower.'
      }
    },
    {
      border: false,
      icon: 'balance-scale',
      left: {
        date: '1954',
        title: 'Brown v. Board of Education (9-0)',
        content: 'Seperating black and white students in public schools is unconstitutional.'
        }
       },
      {
        border: false,
        icon: 'balance-scale',
        right: {
          date: '1966',
          title: 'Miranda v. Arizona (5-4)',
          content: 'Prisoners must be advised of their rights before being questioned.'
        }
      },
      {
        border: false,
        icon: 'gavel',
        left: {
          date: '1969',
          title: 'Appointed',
          content: 'Warren Earl Burger appointed by President Richard M. Nixon.'
        }
      },
      {
        border: false,
        icon: 'balance-scale',
        right: {
          date: '1973',
          title: 'Roe v. Wade (7-2)',
          content: 'Women have a right to an abortion during the first two trimesters.'
        }
      },
      {
        border: false,
        icon: 'gavel',
        left: {
          date: '1986',
          title: 'Appointed',
          content: 'William H. Rehnquist appointed by President Ronald Reagan.'
        }
      },
      {
        border: false,
        icon: 'balance-scale',
        right: {
          date: '2000',
          title: 'Bush v. Gore (5-4)',
          content: 'No recount of the 2000 Presidential election was feasible.'
        }
      },
      {
        border: false,
        icon: 'gavel',
        left: {
          date: '2005',
          title: 'Appointed',
          content: 'John G. Roberts, Jr. is appointed by President George Bush.'
        }
      },
      {
        border: false,
        icon: 'balance-scale',
        right: {
          date: '2010',
          title: 'Citizens United v. The FEC (5-4)',
          content: 'Corporations and unions can spend unlimited amounts in elections.'
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
